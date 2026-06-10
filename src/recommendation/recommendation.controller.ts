import { Body, Controller, Post } from "@nestjs/common";
import { RecommendationService } from "./recommendation.service";

@Controller("recommendation")
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Post()
  generate(@Body() body: { budget: number }) {
    return this.recommendationService.generate(body.budget);
  }
}
