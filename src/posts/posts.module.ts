import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostProvider } from './posts.providers';

@Module({
  controllers: [PostsController],
  providers: [PostProvider],
})
export class PostsModule {}
