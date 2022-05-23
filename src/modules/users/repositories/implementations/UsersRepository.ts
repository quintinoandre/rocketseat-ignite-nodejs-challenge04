import { User } from "../../model";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private static INSTANCE: UsersRepository;

  private constructor(private users: Array<User> = []) {}

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE)
      UsersRepository.INSTANCE = new UsersRepository();

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = receivedUser;

    user.admin = true;

    user.updated_at = new Date();

    const userIndex = this.users.findIndex(
      (user) => user.id === receivedUser.id
    );

    this.users.splice(userIndex, 1, user);

    return user;
  }

  list(): Array<User> {
    return this.users;
  }
}

export { UsersRepository };
