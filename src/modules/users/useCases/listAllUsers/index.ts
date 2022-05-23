import { UsersRepository } from "../../repositories";
import { ListAllUsersController } from "./ListAllUsersController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const usersRepository = UsersRepository.getInstance();

const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);

const listAllUsersController = new ListAllUsersController(listAllUsersUseCase);

export { listAllUsersController };
