## Docker Swarm Services

## Goals:

.Learn how to create, update and remove a service
.Learn how service load balancing works
.Understand Global Vs Replica Mode
.Learn some service constraints

## Challenge:

.Create an nginx service
.Update the nginx service to have 4 replicas
.Add a constraint only allow for deployment on manager

## Commands Syntax

docker service create nginx (Creates one instance of nginx running on cluster)
docker service ls (list all services)
docker service ps service_auto_gen_name
docker service update --replicas 6 service_auto_gen_name
docker service update --publish-add 9090:80 frosty_mclean (updates ports in all containers in all service)
docker service rm service_auto_gen_name (removes a service)
docker service update --constraint-add "node.hostname==localhost.localdomain" frosty_mclean (adds constraints to service)

## Challenge Answer

docker service create --name challenge nginx
docker service update --replicas 4 challenge or docker service scale challenge=4
docker service update --constraint-add "node.role==manager" challenge

docker service rollback challenge (rolling back to previous configuration)
