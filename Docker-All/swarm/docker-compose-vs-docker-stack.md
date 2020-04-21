----------------------------------------
| Docker Compose Vs Docker Stack Deploy|
----------------------------------------

Goals:
------
.Learn some simmilarities and differences
.Labels with docker compose
.How to create and remove a stack


Challenge
---------
.Create an nginx docker stack with:
 - A label
 - 10mb memory reservation
 - Restart only on failure


.Remove the stack
--------------------------------------------

--> Docker stack deploy is basically the same thing as docker compose except,docker compose operates on only one docker host.
--> Docker stack deploy, deploys the service across all the nodes.


vi docker-compose.yml (for stack deploy)
----------------------------------------
version: '3.4'

services:
  apache_httpd:
    image: httpd:latest
    deploy:
      mode: replicated
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
        preferences: 
          spread: node.labels.zone
      resources:
        limits:
          memory: 50M
        reservations:
          cpus: '0.10'
      update_config:
        parallelism: 1
        delay: 10s
        monitor: 5s

To run:
---------
docker stack deploy stack_name

or

docker stack deploy -c docker-compose.yml stack_name


-------------------------
Commands 
--------
docker service ls 

docker service update --publish-add 80:80 stack_name_generated

docker stack ls

docker stack ps (containers running for the stack)

docker stack services stack_name

docker stack rm stack_name


Challenge Answer
-------------------

vi docker-compose.yml (for stack deploy)
----------------------------------------
version: '3.4'

services:
  nginx:
    image: nginx:latest
    deploy:
      mode: replicated
      replicas: 2
      labels:
        com.docker.descr: "nginx stack"
      restart_policy:
        condition: failure
        delay: 5s
        max_attempts: 3
        window: 120s
      placement:
        constraints:
          - node.role == worker
        preferences: 
          spread: node.labels.zone
      resources:
        limits:
          memory: 10M
