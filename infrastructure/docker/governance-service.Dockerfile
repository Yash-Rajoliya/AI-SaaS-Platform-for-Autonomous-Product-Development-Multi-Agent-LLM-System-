FROM node:22-alpine AS builder

WORKDIR /governance

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S governance && adduser -S governance -G governance

WORKDIR /governance

COPY --from=builder /governance .

USER governance

EXPOSE 8087

CMD ["node","server.js"]