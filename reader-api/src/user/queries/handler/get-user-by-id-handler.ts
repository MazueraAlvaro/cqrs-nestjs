import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { GetUserByIdQuery } from "../impl/get-user-by-id.query";

@QueryHandler(GetUserByIdQuery)
export class GetUserByIdHandler implements IQueryHandler<GetUserByIdQuery> {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  execute(query: GetUserByIdQuery): Promise<User> {
    console.log(
      "----------------------------------------------------------------------"
    );
    console.log("Executing Query GetUserByIdQuery with data", query);
    console.log(
      "----------------------------------------------------------------------"
    );
    return this.usersRepository.findOne({ where: { id: query.id } });
  }
}
