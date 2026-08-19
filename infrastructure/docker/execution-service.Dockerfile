FROM node:22-alpine AS builder

WORKDIR /service

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S execution && adduser -S execution -G execution

WORKDIR /service

COPY --from=builder /service .

USER execution

EXPOSE 8083

CMD ["node","server.js"]