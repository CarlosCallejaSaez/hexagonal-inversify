import { injectable, inject } from 'inversify';
import { User } from '../../domain/models/user';
import { IUserRepository } from '../../domain/repositories/userRepository';

// Decorador @injectable() indica que esta clase puede ser inyectada como una dependencia
@injectable()
export class UserService {
  // El constructor recibe una instancia de IUserRepository inyectada
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}

  // Método para crear un usuario utilizando el repositorio
  async createUser(name: string, email: string): Promise<User> {
    const user = new User(name, email);
    return this.userRepository.create(user);
  }

  // Método para obtener todos los usuarios utilizando el repositorio
  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
