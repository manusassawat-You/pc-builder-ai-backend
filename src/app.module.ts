import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { CategoriesModule } from "./categories/categories.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ProductsModule } from "./products/products.module";
import { RecommendationController } from "./recommendation/recommendation.controller";
import { RecommendationModule } from "./recommendation/recommendation.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,
    CategoriesModule,
    ProductsModule,
    RecommendationModule,
  ],
})
export class AppModule {}
