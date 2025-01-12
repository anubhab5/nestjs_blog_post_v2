import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersProviders } from './providers/users.providers';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UsersProviders],
  imports: [forwardRef(() => AuthModule)],
  exports: [UsersProviders],
})
export class UsersModule {}
