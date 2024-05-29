import { injectable } from 'inversify';
import { IUserRepository } from '../../domain/repositories/userRepository';
import { User } from '../../domain/models/user';
import { UserModel, IUserDocument } from './schemas/userSchema';

// Decorador @injectable() indica que esta clase puede ser inyectada como una dependencia
@injectable()
export class MongooseUserRepository implements IUserRepository {
  // Implementación del método create utilizando Mongoose
  async create(user: User): Promise<User> {
    const userModel = new UserModel(user);
    const savedUser = await userModel.save();
    return new User(savedUser.name, savedUser.email);
  }

  // Implementación del método findAll utilizando Mongoose
  async findAll(): Promise<User[]> {
    const userDocuments = await UserModel.find().exec();
    return userDocuments.map(userDoc => new User(userDoc.name, userDoc.email));
  }
}
