import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtGuard } from "./jwt.guard";
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(
    @Body()
    body: {
      email: string;
      password: string;
      name?: string;
    },
  ) {
    console.log("BODY =", body);

    return this.authService.register(body.email, body.password, body.name);
    {
      return this.authService.register(body.email, body.password, body.name);
    }
  }
  @Post("login")
  login(
    @Body()
    body: {
      email: string;
      password: string;
    },
  ) {
    return this.authService.login(body.email, body.password);
  }
  @Get("me")
  @UseGuards(JwtGuard)
  me(@Req() req: any) {
    return this.authService.me(req.user.sub);
  }
}
