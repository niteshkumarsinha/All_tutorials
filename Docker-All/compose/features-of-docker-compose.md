Helpful Docker Compose Features
--------------------------------

Goals
---------

Building With Docker Compose
Pulling Images for a Docker Compose
Restarting, Pausing, Stopping, etc services
Docker Compose Logs and Docker Events

Challenge
----------

.Figure Out how to stop the docker-compose services , but not remove the network
.Figure out how to rm the docker-compose services that were stopped



Dockerfile
-----------
FROM nginx:latest

RUN echo "test"


vi docker-compose.yml
----------------------

version: ''3.1'

services:
  nginx:
    build: ./path/to/Dockerfile
    environment: 
      TEST_ENV: test_123
    restart: always
    volumes:
      - nginx_volume:/usr/share/nginx/html/vol
  httpd:
    image: httpd:latest
    ports:
      - 81:80
      - 8001:8000

volumes:
  nginx_volume:
    driver: local


To run : docker-compose up -d --build(to always rebuild)
		 docker-compose build (only to build)


----------------------------------------------------------------

docker-compose pull 
docker-compose pull nginx (just to pull specific service)

----------------------------------------------------------------

docker-compose restart 
docker-compose pause
docker-compose unpause
docker-compose stop httpd
docker-compose start httpd
docker-compose top
docker-compose logs
docker-compose events

----------------------------------------------------------------

Challenge Answer
------------------

docker-compose stop
docker-compose rm
