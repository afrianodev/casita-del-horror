import * as usersService from "../services/users.service.js";

export async function listUsers(_req, res, next) {
  try {
    const users = await usersService.getUsers();
    res.json({ users });
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res, next) {
  try {
    const user = await usersService.getUserById(Number(req.params.userId));
    res.json({ user });
  } catch (err) {
    next(err);
  }
}
