import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { UserService } from '../../application/services/userService';

// Decorador @injectable() indica que esta clase puede ser inyectada como una dependencia
@injectable()
export class UserController {
  // El constructor recibe una instancia de UserService inyectada
  constructor(@inject(UserService) private userService: UserService) {}

  // Método para manejar la creación de un usuario
  async createUser(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;
    const user = await this.userService.createUser(name, email);
    res.status(201).json(user);
  }

  // Método para manejar la obtención de todos los usuarios
  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.status(200).json(users);
  }
}
