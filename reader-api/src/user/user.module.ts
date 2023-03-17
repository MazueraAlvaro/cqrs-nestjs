import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { GetUserByIdHandler } from "./queries/handler/get-user-by-id-handler";
import { GetUsersHandler } from "./queries/handler/get-users.handler";
import { UserController } from "./user.controller";

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  providers: [GetUsersHandler, GetUserByIdHandler],
  controllers: [UserController],
})
export class UserModule {}
