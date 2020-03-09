Docker Compose Volumes, Memory Persistence
-------------------------------------------

Goals:
  .Briefly go over volumes again
  .Explain the benefits of volume with scaling and application persistence
  .Learn Docker Volume Cli

Challenge:
  .Deploy the mysql db and adminer application. with mysql having a volume mounted on the data directory.


vi docker-compose.yml
----------------------

version: '3.1'

services:
  nginx:
    image: nginx-scale:latest
    restart: always
    volumes:
      - nginx_volume:/usr/share/nginx/html/vol
      # - /home/test:/usr/test

volumes:
  nginx_volume:
    driver: local


To run: docker-compose up -d


Challenge Answer:
------------------------

vi docker-compose.yml
----------------------

version: '3.1'

services:
  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: password
    volumes: 
      - dbdata: /var/lib/mysql

  admin:
    image: adminer:latest
    ports: 8080:8000

volumes:
  dbdata:
    driver: local

docker-compose up -d
