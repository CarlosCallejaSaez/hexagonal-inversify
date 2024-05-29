import { User } from '../models/user';

// Interfaz que define el contrato del repositorio de usuarios
// Esto permite abstraer la implementación concreta del repositorio
export interface IUserRepository {
  create(user: User): Promise<User>;
  findAll(): Promise<User[]>;
}
