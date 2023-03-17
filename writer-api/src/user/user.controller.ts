import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { DeleteUserCommand } from "./commands/impl/save-person.command/delete-user.command";
import { SaveUserCommand } from "./commands/impl/save-person.command/save-user.command";

@Controller("users")
export class UserController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createUser(@Body() userDTO: SaveUserCommand) {
    return this.commandBus.execute(userDTO);
  }

  @Delete()
  @UsePipes(new ValidationPipe({ transform: true }))
  deleteUser(@Body() userDeleteDTO: DeleteUserCommand) {
    return this.commandBus.execute(userDeleteDTO);
  }
}
