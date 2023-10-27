FROM node:14

EXPOSE 5500

WORKDIR /src

COPY package.json package-log*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]