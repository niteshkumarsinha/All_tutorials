Docker Networks
-------------------

Goals:
------
.Docker Compose and networks
.How to view and create networks
.How to add containers to a network

Challenge:
-------------

.Run docker-compose with at least one container, then add an existing container to the network created

.docker network ls -> Lists all networks
.docker network create network-name
.docker network prune -> removes network not used by at least one container

vi docker-compose.yml
---------------------

version: '3.1'

services:
  db:
    image: mysql:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
    networks:
      - backend  
  adminer:
    image: adminer: latest
    restart: always
    ports: 
      - 8080:8080
    networks:
      - frontend

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge



.docker network connect network_name container_name/id
.docker network disconnect  network_name container_name/id
.docker network inspect network_name
.docker run -d --network network-name nginx

Challenge Answer
--------------------
vi docker-compose.yml
-----------------------

version: '3.1'

services:
  db:
    image: mysql:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
    networks:
      - db_adminer  
  adminer:
    image: adminer:latest
    restart: always
    ports: 
      - 8080:8080
    networks:
      - db_adminer

networks:
  db_adminer: 
    driver: bridge