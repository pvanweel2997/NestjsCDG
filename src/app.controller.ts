import { Controller, Get } from "@nestjs/common";

@Controller()
class AppController {
  @Get("/")
  getRootRoute() {
    return "hi";
  }

  @Get("/bye")
  getByeThere() {
    return "By there";
  }
}

export default AppController;
