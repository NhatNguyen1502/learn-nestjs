import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HomeController } from './home/home.controller';
import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/dataSource';
import { CommentModule } from './comment/comment.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // use for all module
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    MongooseModule.forRoot(
      'mongodb+srv://openuniverse:openuniverse@openuniverse.nalsuba.mongodb.net/test?retryWrites=true&w=majority&appName=OpenUniverse',
    ),
    UserModule,
    CommentModule,
    PostModule,
  ],
  controllers: [AppController, HomeController],
  providers: [AppService],
})
export class AppModule {}
