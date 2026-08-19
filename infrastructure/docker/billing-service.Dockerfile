FROM node:22-alpine AS builder

WORKDIR /billing

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S billing && adduser -S billing -G billing

WORKDIR /billing

COPY --from=builder /billing .

USER billing

EXPOSE 8085

CMD ["node","server.js"]