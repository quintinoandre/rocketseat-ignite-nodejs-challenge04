import { User } from "../../model";
import { IUsersRepository } from "../../repositories";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) throw new Error("User not found");

    return user;
  }
}

export { ShowUserProfileUseCase };
