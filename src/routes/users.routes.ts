import { Router } from "express";

import {
  createUserController,
  listAllUsersController,
  turnUserAdminController,
  showUserProfileController,
} from "../modules/users/useCases";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRoutes.patch("/:user_id/admin", (request, response) =>
  turnUserAdminController.handle(request, response)
);

usersRoutes.get("/:user_id", (request, response) =>
  showUserProfileController.handle(request, response)
);

usersRoutes.get("/", (request, response) =>
  listAllUsersController.handle(request, response)
);

export { usersRoutes };
