import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HomeController } from './home/home.controller';
import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/entities/users.entity';


@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true, // use for all module
      envFilePath: '.env', 
    }), 
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql3306',
      database: 'test',
      entities: [Users],
      // synchronize: true,
    }),
  ],
  controllers: [AppController, HomeController],
  providers: [AppService],
})
export class AppModule {}
