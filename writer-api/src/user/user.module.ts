import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { DeleteUserHandler } from "./commands/handler/save-person.handler/delete-user.handler";
import { SaveUserHandler } from "./commands/handler/save-person.handler/save-user.handler";
import { UserController } from "./user.controller";

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  providers: [SaveUserHandler, DeleteUserHandler],
  controllers: [UserController],
})
export class UserModule {}
