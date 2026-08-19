FROM node:22-alpine AS builder

WORKDIR /monitoring

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S monitor && adduser -S monitor -G monitor

WORKDIR /monitoring

COPY --from=builder /monitoring .

USER monitor

EXPOSE 8086

CMD ["node","server.js"]