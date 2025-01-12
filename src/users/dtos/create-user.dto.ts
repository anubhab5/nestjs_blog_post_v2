import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * CreateUserDTO class
 * Used to validate the incoming request when creating a user object
 */
export class CreateUserDTO {
  /**
   * firstName
   *
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  /**
   *
   */
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName!: string;

  /**
   *
   */
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   *
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message: 'Constraint Mismatch',
  })
  password: string;
}
