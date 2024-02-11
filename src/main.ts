import { NestFactory } from "@nestjs/core";
import AppModule from "./app.module";

const boostrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
};

boostrap();
