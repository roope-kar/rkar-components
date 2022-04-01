all: build

build: ./node_modules/.bin/tsc ./node_modules/.bin/esbuild
	./node_modules/.bin/tsc scripts/build.ts
	node scripts/build.js
	rm scripts/build.js
