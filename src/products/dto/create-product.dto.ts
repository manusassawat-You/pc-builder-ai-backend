import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateProductDto {
  @ApiProperty({ example: "f0e5a5de-62b1-4828-9e18-a735bda2236c" })
  @IsUUID()
  categoryId: string;

  @ApiProperty({ example: "AMD Ryzen 7 7800X3D" })
  @IsString()
  @MinLength(2)
  @MaxLength(160)
  name: string;

  @ApiPropertyOptional({ example: "AMD" })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiPropertyOptional({ example: "7800X3D" })
  @IsOptional()
  @IsString()
  model?: string;

  @ApiPropertyOptional({ example: "Gaming CPU for AM5 builds." })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @ApiPropertyOptional({ example: "https://example.com/products/cpu.jpg" })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @ApiPropertyOptional({ example: "AM5" })
  @IsOptional()
  @IsString()
  socket?: string;

  @ApiPropertyOptional({ example: "DDR5" })
  @IsOptional()
  @IsString()
  memoryType?: string;

  @ApiPropertyOptional({ example: "mATX" })
  @IsOptional()
  @IsString()
  formFactor?: string;

  @ApiPropertyOptional({ example: 750 })
  @IsOptional()
  @IsInt()
  wattage?: number;

  @ApiPropertyOptional({ example: 650 })
  @IsOptional()
  @IsInt()
  recommendedPsu?: number;

  @ApiPropertyOptional({ example: 32 })
  @IsOptional()
  @IsInt()
  capacity?: number;

  @ApiPropertyOptional({ example: 300 })
  @IsOptional()
  @IsInt()
  gpuLength?: number;

  @ApiProperty({ example: 14990 })
  @IsPositive()
  price: number;
}
