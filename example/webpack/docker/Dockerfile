FROM node:latest

RUN mkdir /usr/app
WORKDIR /usr/app

COPY ./hypernova /usr/app

RUN npm install
EXPOSE 8080

CMD ["npm", "start"]