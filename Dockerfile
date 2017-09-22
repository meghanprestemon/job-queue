FROM node:8.4.0-alpine

WORKDIR app

COPY package.json .
RUN npm install

COPY . .
