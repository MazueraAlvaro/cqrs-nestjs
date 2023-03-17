import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { DeleteUserCommand } from "../../impl/save-person.command/delete-user.command";

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async execute(command: DeleteUserCommand): Promise<boolean> {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Executing Command DeleteUserCommand with data:", command);
    console.log(
      "----------------------------------------------------------------------------"
    );

    await this.userRepository.delete(command.id);
    return true;
  }
}
