import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  /**
   *
   * @param authSvc
   */
  constructor(private readonly authSvc: AuthService) {
    /** */
  }
  /**
   *
   * @returns
   */
  isLoggedIn() {
    return true;
  }
}
