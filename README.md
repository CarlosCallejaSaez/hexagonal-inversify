### Descripción de Carpetas y Archivos

- **application/services/userService.ts**: Contiene la lógica de negocio para manejar usuarios.
- **domain/models/user.ts**: Define el modelo de dominio para el usuario.
- **domain/repositories/userRepository.ts**: Define el contrato para el repositorio de usuarios.
- **infrastructure/controllers/userController.ts**: Controlador que maneja las rutas de Express relacionadas con los usuarios.
- **infrastructure/mongoose/schemas/userSchema.ts**: Define el esquema de Mongoose para el usuario.
- **infrastructure/mongoose/userRepository.ts**: Implementación del repositorio utilizando Mongoose.
- **inversify.config.ts**: Configura el contenedor de Inversify para la inyección de dependencias.
- **app.ts**: Configura la aplicación Express y define las rutas.
- **server.ts**: Configura la conexión a la base de datos MongoDB y arranca el servidor.