import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersProviders {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {
    /** */
  }

  /**
   *
   * @returns
   */
  findAllUsers() {
    this.authService.isLoggedIn();

    return [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'lH8m0@example.com',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'lH8m0@example.com',
      },
    ];
  }

  /**
   *
   * @param id
   * @param limit
   * @param offset
   * @returns
   */
  findById(id: number, limit: number, offset: number) {
    return {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'lH8m0@example.com',
    };
  }
}
