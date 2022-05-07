FROM node:15

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN cd /usr/src/app && npm i

EXPOSE 3000