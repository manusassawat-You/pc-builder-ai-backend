import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class QueryProductsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  @ApiPropertyOptional({
    example: "cpu",
    description: "Category slug",
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiPropertyOptional({ example: "ryzen" })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  search?: string;
}
