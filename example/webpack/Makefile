all: static-init frontend docker

static-init:
	cd @static && npm install

frontend:
	cd @static && npm run frontend

.PHONY: docker
docker:
	$(MAKE) -C docker