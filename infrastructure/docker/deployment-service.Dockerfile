FROM node:22-alpine AS builder

WORKDIR /deployment

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S deployment && adduser -S deployment -G deployment

WORKDIR /deployment

COPY --from=builder /deployment .

USER deployment

EXPOSE 8090

CMD ["node","server.js"]