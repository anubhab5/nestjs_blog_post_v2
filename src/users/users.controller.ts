import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { GetUsersParamDTO } from './dtos/get-user-param.dto';
import { PatchUserDTO } from './dtos/patch-user.dto';
import { UsersProviders } from './providers/users.providers';

@Controller('users')
export class UsersController {
  constructor(private readonly usersProviders: UsersProviders) {
    /** */
  }

  /**
   * Method to get users
   * @param param
   * @param query
   * @returns
   */
  @Get('/:id')
  public getUsers(
    @Param() param: GetUsersParamDTO,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.usersProviders.findAllUsers();
  }

  /**
   *
   * @param param
   * @param query
   * @param createUserDto
   * @param header
   * @param ip
   * @returns
   */
  @Post('/:id/:optional')
  public createUser(
    @Param() param: any,
    @Query() query: any,
    @Body() createUserDto: CreateUserDTO,
    @Headers() header: any,
    @Ip() ip: string,
  ) {
    console.log(createUserDto);
    return 'create user';
  }

  /**
   * Controller to update a user
   * @param patchUserDTO
   * @returns
   */
  @Patch()
  public patchUser(@Body() patchUserDTO: PatchUserDTO) {
    return patchUserDTO;
  }
}
