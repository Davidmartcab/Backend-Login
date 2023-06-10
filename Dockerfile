FROM node:latest AS install

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

EXPOSE 4000

CMD ["npm", "run", "dev"]