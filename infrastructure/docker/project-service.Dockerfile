FROM node:22-alpine AS builder

WORKDIR /service

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S project && adduser -S project -G project

WORKDIR /service

COPY --from=builder /service .

USER project

EXPOSE 8084

CMD ["node","server.js"]