Docker Compose Scaling & Healing
-----------------------------------

Goals:
------
.Learn what is scaling?
.Learn how to scale containers using docker compose
.Learn what is self healing

Challenge:
----------
.Deploy an apache web server (httpd) using compose, Then scale it to 3


vi docker-compose.yml
----------------------
version: '3.1'

services:
  nginx:
    image: nginx-scale:latest
    restart: always

docker-compose up -d

docker-compose scale nginx=3 (deprecated)

docker-compose up -d --scale nginx=4


Challenge-Answer
------------------

vi docker-compose-httpd.yml
---------------------------

version: '3.1'

services: 
  web:
    image: httpd:latest
    restart: always


.docker-compose -p challenge -f docker-compose-httpd.yml up -d

To scale: docker-compose -p challenge -f docker-compose-httpd.yml up -d --scale web=3
---------