<!-- Create a README which say the necesary environment variables to use the backend -->

## Environment variables

- `PORT`: Port where the server will be listening
- `MONGO_URI`: URI of the MongoDB database
- `JWT_SECRET`: Secret key to sign the JWT tokens

## Create the image

- `docker build -t backendlogin .`

## Run the container with default environment variables

- `docker run -p 4000:4000 -d backendlogin`

## Run the container with custom environment variables

- `docker run -p 4000:4000 -d --env PORT=<PORT> --env MONGO_URI='<MONGO_URI>' --env JWT_SECRET='<SECRET>' backendlogin`

## Endpoints

- `/api/login`
  - `POST`: Iniciar sesión con correo electrónico y contraseña
    - Body:
      - email: String
      - password: String

- `/api/register`
  - `POST`: Registrarse con nombre de usuario, correo electrónico y contraseña
    - Body:
      - username: String
      - email: String
      - password: String

- `/api/logout`
  - `POST`: Cerrar sesión

- `/api/profile`
  - `GET`: Obtener el perfil del usuario si el token es válido y actualizar el token
