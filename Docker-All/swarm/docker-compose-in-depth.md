# Docker run commands Versus Docker Compose

docker run mmumshad/simple-webapp
docker run mongodb
docker run redis:alpine
docker run ansible


## docker-compose.yml

services:
    web:
        image: "mmumshad/simple-webapp"
    database:
        image: "mongodb"
    messaging:
        image: "redis:alpine"
    orchestration:
        image: "ansible"


docker-compose up

Its all for a single host
