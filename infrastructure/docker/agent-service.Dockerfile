FROM node:22-alpine AS builder

WORKDIR /service

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S agent && adduser -S agent -G agent

WORKDIR /service

COPY --from=builder /service .

USER agent

EXPOSE 8082

CMD ["node","server.js"]