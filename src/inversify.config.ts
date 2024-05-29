import 'reflect-metadata';
import { Container } from 'inversify';
import { UserService } from './application/services/userService';
import { UserController } from './infrastructure/controllers/userController';
import { MongooseUserRepository } from './infrastructure/mongoose/userRepository';
import { IUserRepository } from './domain/repositories/userRepository';

// Crear un contenedor para gestionar las dependencias
const container = new Container();

// Vincular la interfaz IUserRepository con la implementación concreta MongooseUserRepository
container.bind<IUserRepository>('UserRepository').to(MongooseUserRepository);
// Vincular UserService y UserController para la inyección de dependencias
container.bind<UserService>(UserService).toSelf();
container.bind<UserController>(UserController).toSelf();

// Exportar el contenedor para ser utilizado en la aplicación
export { container };
