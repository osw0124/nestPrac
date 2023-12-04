import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  // Listen to all shutdown hooks (e.g “SIGTERM” “SIGINT”
  // app.enableShutdownHooks();
  // only listens to SIGINT
  // app.enableShutdownHooks([‘SIGINT’]);
  await app.listen(parseInt(process.env.PORT as string));
  // dev push~~~~~
}
main();
