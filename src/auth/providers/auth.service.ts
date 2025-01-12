import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersProviders } from 'src/users/providers/users.providers';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersProviders))
    private readonly userService: UsersProviders,
  ) {}

  /**
   *
   * @returns
   */
  isLoggedIn() {
    this.userService.findById(123, 1, 10);
    return true;
  }
}
