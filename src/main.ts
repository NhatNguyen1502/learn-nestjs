import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan = require('morgan');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan(':method :url :status :response-time ms :res[content-length] ":referrer" :remote-user [:date[web]]',));
  // app.setGlobalPrefix('/api'); // use api as global prefix if you don't have subdomain
  await app.listen(process.env.PORT, );
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
