import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { SaveUserCommand } from "../../impl/save-person.command/save-user.command";

@CommandHandler(SaveUserCommand)
export class SaveUserHandler implements ICommandHandler<SaveUserCommand> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  execute(command: SaveUserCommand): Promise<User> {
    console.log(
      "----------------------------------------------------------------------"
    );
    console.log("Executing Command SaveUserCommand with data:", command);
    console.log(
      "----------------------------------------------------------------------"
    );
    const user = new User();
    user.firstname = command.firstname;
    user.lastname = command.lastname;
    user.username = command.username;
    return this.userRepository.save(user);
  }
}
