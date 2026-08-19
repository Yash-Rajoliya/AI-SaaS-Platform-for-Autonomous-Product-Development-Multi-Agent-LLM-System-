FROM node:22-alpine AS builder

WORKDIR /orchestrator

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:22-alpine

RUN addgroup -S orchestration && adduser -S orchestration -G orchestration

WORKDIR /orchestrator

COPY --from=builder /orchestrator .

USER orchestration

EXPOSE 8088

CMD ["node","server.js"]