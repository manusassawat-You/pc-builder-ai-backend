import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { QueryProductsDto } from "./dto/query-products.dto";
import { UpdateProductDto } from "./dto/update-product.dto";

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    await this.ensureCategoryExists(dto.categoryId);

    const data: Prisma.ProductUncheckedCreateInput = {
      ...dto,
      price: new Prisma.Decimal(dto.price),
    };

    return this.prisma.product.create({
      data,
      include: { category: true },
    });
  }

  findAll(query: QueryProductsDto) {
    const where: Prisma.ProductWhereInput = {
      categoryId: query.categoryId,

      category: query.category
        ? {
            slug: query.category,
          }
        : undefined,

      OR: query.search
        ? [
            {
              name: {
                contains: query.search,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query.search,
                mode: "insensitive",
              },
            },
          ]
        : undefined,
    };

    return this.prisma.product.findMany({
      where,
      include: { category: true },
      orderBy: { name: "asc" },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return product;
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.findOne(id);

    if (dto.categoryId) {
      await this.ensureCategoryExists(dto.categoryId);
    }

    const data: Prisma.ProductUncheckedUpdateInput = {
      ...dto,
      price:
        dto.price !== undefined ? new Prisma.Decimal(dto.price) : undefined,
    };

    return this.prisma.product.update({
      where: { id },
      data,
      include: { category: true },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.product.delete({
      where: { id },
    });
  }

  private async ensureCategoryExists(categoryId: string): Promise<void> {
    const category = await this.prisma.category.findUnique({
      where: { id: categoryId },
      select: { id: true },
    });

    if (!category) {
      throw new ConflictException("Category does not exist");
    }
  }
}
