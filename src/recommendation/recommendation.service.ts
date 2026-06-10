import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RecommendationService {
  constructor(private readonly prisma: PrismaService) {}

  async generate(budget: number) {
    const cpuBudget = budget * 0.25;
    const gpuBudget = budget * 0.4;
    const motherboardBudget = budget * 0.1;
    const ramBudget = budget * 0.1;
    const ssdBudget = budget * 0.08;
    const psuBudget = budget * 0.07;

    const cpu = await this.prisma.product.findFirst({
      where: {
        category: { slug: "cpu" },
        price: { lte: cpuBudget },
      },
      orderBy: { price: "desc" },
    });

    const motherboard = await this.prisma.product.findFirst({
      where: {
        category: { slug: "motherboard" },
        price: { lte: motherboardBudget },
      },
      orderBy: { price: "desc" },
    });

    const gpu = await this.prisma.product.findFirst({
      where: {
        category: { slug: "gpu" },
        price: { lte: gpuBudget },
      },
      orderBy: { price: "desc" },
    });

    const ram = await this.prisma.product.findFirst({
      where: {
        category: { slug: "ram" },
        price: { lte: ramBudget },
      },
      orderBy: { price: "desc" },
    });

    const ssd = await this.prisma.product.findFirst({
      where: {
        category: { slug: "ssd" },
        price: { lte: ssdBudget },
      },
      orderBy: { price: "desc" },
    });

    const psu = await this.prisma.product.findFirst({
      where: {
        category: { slug: "psu" },
        price: { lte: psuBudget },
      },
      orderBy: { price: "desc" },
    });

    return {
      cpu,
      motherboard,
      gpu,
      ram,
      ssd,
      psu,
    };
  }
}
