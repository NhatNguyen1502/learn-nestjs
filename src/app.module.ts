import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HomeController } from './home/home.controller';
import { UserModule } from './user/user.module';


@Module({
  imports: [ConfigModule.forRoot({ 
    isGlobal: true, // use for all module
    envFilePath: '.env', 
  }), UserModule],
  controllers: [AppController, HomeController],
  providers: [AppService],
})
export class AppModule {}
