FROM node:22-alpine AS builder

WORKDIR /optimizer

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S optimizer && adduser -S optimizer -G optimizer

WORKDIR /optimizer

COPY --from=builder /optimizer .

USER optimizer

EXPOSE 8089

CMD ["node","server.js"]