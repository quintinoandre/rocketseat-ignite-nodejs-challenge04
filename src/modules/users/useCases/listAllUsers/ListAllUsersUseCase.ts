import { User } from "../../model";
import { IUsersRepository } from "../../repositories";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): Array<User> {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new Error("User not found");

    if (!user.admin) throw new Error("User is not admin");

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
