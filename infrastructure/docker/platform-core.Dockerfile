FROM node:22-alpine AS builder

WORKDIR /platform

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S platform && adduser -S platform -G platform

WORKDIR /platform

COPY --from=builder /platform .

USER platform

EXPOSE 8091

CMD ["node","server.js"]