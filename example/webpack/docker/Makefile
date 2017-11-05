all: bundle docker

docker:
	docker build -f Dockerfile -t hypernova-example ../

bundle:
	cd ../@static && npm run hypernova