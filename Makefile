install:
	npm install

install-ci:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run