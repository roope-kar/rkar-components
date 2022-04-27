all: build

format: ./node_modules/.bin/prettier
	./node_modules/.bin/prettier --write ./src/**/*

lint: ./node_modules/.bin/eslint
	./node_modules/.bin/eslint ./src/**/*.ts

build:  ./node_modules/.bin/tsc ./node_modules/.bin/esbuild
	./node_modules/.bin/prettier --write ./src/**/*
	./node_modules/.bin/tsc scripts/build.ts
	node scripts/build.js
	rm scripts/build.js
