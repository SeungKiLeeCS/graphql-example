FROM node:10.7-alpine

WORKDIR /app
ADD . /app

CMD ["yarn", "start"]
