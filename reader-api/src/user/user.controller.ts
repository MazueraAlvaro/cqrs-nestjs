import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { GetUserByIdQuery } from "./queries/impl/get-user-by-id.query";
import { GetUsersQuery } from "./queries/impl/get-users.query";

@Controller("users")
export class UserController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  getUsers() {
    return this.queryBus.execute(new GetUsersQuery());
  }

  @Get(":id")
  getUserById(@Param("id") id: number) {
    const query = new GetUserByIdQuery();
    query.id = id;
    return this.queryBus.execute(query);
  }
}
