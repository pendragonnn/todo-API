FROM node:lts-alpine3.17

WORKDIR /todoapidocker/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8090

CMD ["node", "server.js"]