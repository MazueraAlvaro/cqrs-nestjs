import { IsNotEmpty } from "class-validator";

export class SaveUserCommand {
  @IsNotEmpty()
  firstname: string;

  lastname: string;

  username: string;
}
