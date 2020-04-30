# Docker Secrets and Configs

Goals:
--------

What is a docker config ?
What is a docker secret ?
Some simple docker secret and config commands
How to add and use these with docker stack deployments ?

Challenge
------------

Create a nginx web-service using docker stack deploy
Within the deployment add custom nginx.conf using docker config instead of the default

##########################################################################################

.Secrets and Configs are mounted files inside a container of a swarm service at runtime 
.Main differences
    - Location
        .Secrets can only be mounted to /run/secrets/<secret-name>
        .Configs default to /<config-name>  (can be mounted anywhere)
    - Encryption
        .Secrets are encrypted and then decrypted within the container


Examples:

docker swarm ca | docker secret create swarm_ca -                       (to pipe we use -)

docker swarm ca | docker config create swarm_ca -

Another way to do
----------------
docker swarm ca > swarm_ca.crt

docker config create swarm_ca ./swarm_ca.crt

docker inspect swarm_ca
docker secret ls
docker config ls

using docker-compose
---------------------

vi docker-comose.yml
---------------------

version: 3.4

services:
    apache_httpd:
        image: httpd:latest
        configs:
            - source: swarm.crt
              target: /run/test.crt
        secrets:
            - source: swarm.crt
              target: changed_name        (location has to be /run/secrets/<>)
        deploy:
            modes: replicated
            replicas: 2
            labels:
                com.docker.descr: "test description"
            restart_policy:
                condition: any
                delay: 5s
                max_attempts: 3
                window: 120s
            placement:
                constraints:
                    - node.role == worker
            resources:
                limits:
                    memory: 50M
                reservations:
                    cpus: '0.10'
            update_config:
                parallelism: 1
                delay: 10s
                monitor: 5s

configs:
    swarm.crt:
        file: ./swarm_ca.crt    (default location)

secrets:
    swarm.crt
        file: ./swarm_ca.crt
        

To run:
-------------
docker stack deploy -c docker-compose.yml conf_secret

To check the secrets inside container
---------------------------------------
docker exec -it container_id bash


Challenge Answer
-----------------

   vi docker-compose.yml
   ----------------------

version: 3.4

services:
  ng:
    image: nginx:latest
    ports:
      - 81:80
    configs:
      - source: nginx.conf
        target: /etc/nginx/conf.d/default.conf
    deploy:
      replicas: 2
      labels:
        test.label: "this is a test"
      resources:
        reservations:
          memory: 10mb
      restart_policy:
        condition: on-failure

configs:
  nginx.conf:
    file: ./nginx.conf


To run
-----------
docker stack deploy -c docker-compose-nginx.yml ng_conf_stack
docker exec -it container_id bash
cat /etc/nginx/conf.d/default.conf


Note: You cant update the existing secret, we have to change to new conf
