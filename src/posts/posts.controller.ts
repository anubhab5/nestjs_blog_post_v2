import { Controller } from '@nestjs/common';
import { PostProvider } from './posts.providers';

@Controller('posts')
export class PostsController {
  constructor(private readonly postProvider: PostProvider) {
    /** */
  }
}
