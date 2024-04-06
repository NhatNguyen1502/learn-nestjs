import {
  Dependencies,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel, getModelToken } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()
@Dependencies(getModelToken(Post.name))
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
  async create(createPostDto: CreatePostDto): Promise<Post> {
    try {
      const createdPost = new this.postModel(createPostDto);
      return createdPost.save();
    } catch (error) {
      throw new HttpException(
        'Error while creating a post',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
