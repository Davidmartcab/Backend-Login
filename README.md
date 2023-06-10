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

## For use

- `/api/login:`
    - `POST`: Login with email and password
        -`Body:`
            - `email: String`
            - `password: String`

- `/api/register:`
    - `POST`: Register with username, email and password
        -`Body:`
            - `username: String`
            - `email: String`
            - `password: String`

- `/api/logout:`
    - `POST`: Logout

- `/api/profile:`
    - `GET`: Get the profile of the user if the token is valid and refresh the token