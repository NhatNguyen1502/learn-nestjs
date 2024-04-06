import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan = require('morgan');

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    morgan(
      ':method :url :status :response-time ms :res[content-length] ":referrer" :remote-user [:date[web]]',
    ),
  );
  // app.setGlobalPrefix('/api'); // use api as global prefix if you don't have subdomain

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('quyen')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
  console.log(`Application is running on: http://localhost:3000`);
}
bootstrap();
