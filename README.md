# Padel League Backend

Este proyecto utiliza NestJS como framework de backend y una base de datos MySQL para almacenar los datos.

## Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org) y [npm (Node Package Manager)](https://www.npmjs.com/get-npm) en tu sistema.

Además, necesitarás una instancia de MySQL en ejecución y configurar las credenciales de conexión en el archivo `src/config/database.config.ts`.

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/lcdiaz87/padelLeague-back.git
   ```

2. Navega al directorio del servidor:

    ```bash
    cd padelLeague-back
    ```

3. Instala las dependencias utilizando npm:

    ```bash
    npm install
    ```

4. Configuración de la Base de Datos
  Crea una base de datos MySQL y configura las credenciales de conexión en app.module.ts.
  Ejecuta las migraciones para crear las tablas en la base de datos:

    ```bash
    npm run migrate
    ```

## Ejecución
Ejecuta el servidor de NestJS con el siguiente comando:

  ```bash
  npm run start:dev
  ```
El servidor estará disponible en http://localhost:3000/.

## Endpoints
GET /: Ruta raíz de la API.
POST /user: Crear un usuario.
GET /user: Obtener información de usuario.
PUT /user/:id: Actualizar información de un usuario.
DELETE /user/:id: Eliminar un usuario.
POST /match: Crear un partido.
GET /match: Obtener información de los partidos.
DELETE /match/:id: Eliminar un partido.

### Uso
Accede a la API a través de las rutas definidas y realiza las operaciones correspondientes.

## Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
Realiza cambios y haz commit de tus modificaciones (git commit -am 'Añade una nueva característica').
Push a la rama (git push origin feature/nueva-caracteristica).
Crea un nuevo Pull Request.
