FROM nginx:1.28-alpine

RUN apk add --no-cache curl

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
CMD curl -f http://localhost/ || exit 1

CMD ["nginx","-g","daemon off;"]