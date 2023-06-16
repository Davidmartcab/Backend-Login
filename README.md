## Environment variables
  Create a `.env` file with the following environment variables:

- `PORT`: Port where the server will be listening
- `MONGO_URI`: URI of the MongoDB database

## Create the image

- `docker build -t <NAME> .`

## Run the container with default environment variables
  It use the default environment variables in the `.env` file

- `docker run -p 4000:4000 -d <NAME>`

## Run the container with custom environment variables
  It use the environment variables passed as arguments, if they are not passed, it use the default environment variables in the `.env` file

- `docker run -p <EXTERNAL_PORT>:<PORT> -d --env PORT=<PORT> --env MONGO_URI='<MONGO_URI>' <NAME>`

## Endpoints
  This is the list of endpoints that the server has and the methods that they accept with the accepted body parameters

- `/api/login`
  - `POST`: Login with email and password
    - Body:
      - email: String
      - password: String

- `/api/register`
  - `POST`: Register with username, email, and password
    - Body:
      - username: String
      - email: String
      - password: String

- `/api/logout`
  - `POST`: Logout

- `/api/profile`
  - `GET`: Get the user's profile if the token is valid and refresh the token

- `/api/verify`
  - `GET`: Verify if the token is valid for requests from other services

