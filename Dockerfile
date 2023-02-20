FROM node:17.5-alpine

WORKDIR /app

COPY  ./package.json ./package-lock.json /app/
RUN npm install

COPY . /app

CMD [ "npm", "run", "dev" ]
