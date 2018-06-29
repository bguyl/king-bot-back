FROM node:alpine

LABEL maintainer="Bastien Guyl <bastien@guyl.me"

COPY dist /bot

WORKDIR /bot

ENTRYPOINT ["node", "app.js"]