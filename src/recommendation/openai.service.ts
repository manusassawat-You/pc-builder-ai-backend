import { Injectable } from "@nestjs/common";
import OpenAI from "openai";

@Injectable()
export class OpenAIService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async analyze(build: any) {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert PC builder.",
        },
        {
          role: "user",
          content: `
Analyze this PC build:

${JSON.stringify(build, null, 2)}

Explain:
1. Performance
2. Strengths
3. Weaknesses
4. Upgrade suggestions
`,
        },
      ],
    });

    return completion.choices[0].message.content;
  }
}
