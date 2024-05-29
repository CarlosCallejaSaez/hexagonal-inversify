import { Schema, model, Document } from 'mongoose';

// Interfaz que extiende de Document, propia de Mongoose, para tipar los documentos de usuario
export interface IUserDocument extends Document {
  name: string;
  email: string;
}

// Definición del esquema de Mongoose para los usuarios
const userSchema = new Schema<IUserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true }
});

// Exportación del modelo de Mongoose basado en el esquema
export const UserModel = model<IUserDocument>('User', userSchema);