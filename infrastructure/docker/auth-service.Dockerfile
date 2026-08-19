FROM node:22-alpine AS builder

WORKDIR /service

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S auth && adduser -S auth -G auth

WORKDIR /service

COPY --from=builder /service .

USER auth

EXPOSE 8081

CMD ["node","server.js"]