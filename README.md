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


## 1. ¿Qué hace esta aplicación?

Esta aplicación permite:
- Crear usuarios.
- Obtener la lista de todos los usuarios creados.

## 2. ¿Cómo está organizada la aplicación?

La aplicación está organizada en diferentes capas, cada una con una responsabilidad específica. Esto sigue un concepto llamado "arquitectura hexagonal". Aquí están las capas principales:

- **Dominio**: Aquí definimos las reglas de negocio y los modelos. Por ejemplo, qué es un usuario y qué puede hacer.
- **Aplicación**: Aquí definimos la lógica de negocio específica de nuestra aplicación, como crear un usuario o listar todos los usuarios.
- **Infraestructura**: Aquí nos conectamos con las bases de datos y manejamos las solicitudes HTTP (las peticiones de los usuarios a nuestro servidor).

## 3. ¿Cómo funciona todo junto?

Imaginemos que quieres crear un usuario nuevo. Aquí está el paso a paso de lo que sucede:

### Paso a Paso para Crear un Usuario

1. **El usuario envía una solicitud al servidor**: Cuando haces una solicitud para crear un usuario (por ejemplo, usando Postman o cURL), la solicitud llega a nuestro servidor Express.

2. **El servidor Express recibe la solicitud**: Express es como un recepcionista que recibe todas las solicitudes que llegan a nuestra aplicación.

3. **El controlador maneja la solicitud**: En nuestro caso, tenemos un `UserController` que se encarga de manejar las solicitudes relacionadas con los usuarios. El `UserController` tiene un método `createUser` que se ejecuta cuando llega una solicitud para crear un usuario.

4. **El controlador llama al servicio**: El `UserController` no hace todo el trabajo por sí mismo. En lugar de eso, le pide a `UserService` que se encargue de crear el usuario.

5. **El servicio crea un nuevo usuario**: El `UserService` es como el gerente que sabe cómo crear un usuario. Primero, crea un nuevo objeto `User` con el nombre y el email que le diste.

6. **El servicio guarda el usuario usando el repositorio**: Luego, el `UserService` usa el `UserRepository` para guardar el nuevo usuario en la base de datos. El `UserRepository` es el que sabe cómo hablar con la base de datos (en este caso, usando Mongoose para MongoDB).

7. **La base de datos guarda el usuario**: Mongoose se encarga de guardar el usuario en la base de datos MongoDB.

8. **El controlador responde al cliente**: Una vez que el usuario ha sido guardado, el `UserService` le dice al `UserController` que todo salió bien. El `UserController` entonces responde al cliente (la persona que hizo la solicitud) con una confirmación de que el usuario ha sido creado.

### Paso a Paso para Obtener Todos los Usuarios

1. **El usuario envía una solicitud al servidor**: Cuando haces una solicitud para obtener la lista de todos los usuarios, esa solicitud llega a nuestro servidor Express.

2. **El servidor Express recibe la solicitud**: Express recibe la solicitud.

3. **El controlador maneja la solicitud**: El `UserController` tiene un método `getAllUsers` que se ejecuta cuando llega una solicitud para obtener la lista de usuarios.

4. **El controlador llama al servicio**: El `UserController` le pide a `UserService` que obtenga todos los usuarios.

5. **El servicio obtiene los usuarios del repositorio**: El `UserService` le pide al `UserRepository` que obtenga la lista de todos los usuarios guardados en la base de datos.

6. **La base de datos devuelve la lista de usuarios**: Mongoose obtiene la lista de usuarios desde la base de datos MongoDB.

7. **El servicio devuelve la lista al controlador**: El `UserService` devuelve la lista de usuarios al `UserController`.

8. **El controlador responde al cliente**: Finalmente, el `UserController` responde al cliente con la lista de todos los usuarios.