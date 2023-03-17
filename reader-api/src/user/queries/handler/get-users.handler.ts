import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { GetUsersQuery } from "../impl/get-users.query";

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  execute(query: GetUsersQuery): Promise<User[]> {
    console.log(
      "----------------------------------------------------------------------"
    );
    console.log("Executing Query GetUsersQuery...");
    console.log(
      "----------------------------------------------------------------------"
    );
    return this.usersRepository.find();
  }
}
