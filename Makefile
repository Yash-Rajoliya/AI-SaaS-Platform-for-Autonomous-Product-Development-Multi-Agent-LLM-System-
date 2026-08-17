.PHONY: bootstrap dev build test lint deploy clean

bootstrap:
	pnpm install
	pip install -r requirements.txt

dev:
	docker compose up -d

build:
	pnpm build

test:
	pnpm test

lint:
	pnpm lint

deploy:
	./scripts/deploy.sh

clean:
	rm -rf node_modules
	rm -rf dist
	rm -rf coverage