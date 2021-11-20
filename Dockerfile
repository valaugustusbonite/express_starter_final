### First Stage in Multi-build ###
FROM node:16-alpine as build

WORKDIR /src/app 

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=1337

EXPOSE 1337

### Second Stage in Multi-build ###
FROM alpine:3.12

COPY --from=build /app /app

WORKDIR /app

CMD ["yarn", "dev"]