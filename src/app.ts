import express from 'express';
import bodyParser from 'body-parser';
import { container } from './inversify.config';
import { UserController } from './infrastructure/controllers/userController';

// Crear una instancia de Express
const app = express();

// Configurar el middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Obtener una instancia del controlador de usuarios a través del contenedor de Inversify
const userController = container.get(UserController);

// Definir las rutas y asociarlas con los métodos del controlador
app.post('/users', (req, res) => userController.createUser(req, res));
app.get('/users', (req, res) => userController.getAllUsers(req, res));

// Exportar la instancia de la aplicación para que pueda ser utilizada en otros módulos
export { app };
