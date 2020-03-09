.What is Docker Swarm?
---------------------------

.Essentially it is a cluster of docker hosts that work together to deploy containers.
.The coordination involved between the docker hosts is most often reffered to as Orchestration.
                                                                                 --------------


.A Cluster is a made of 2 different types of docker hosts also known as NODES.
                                                                        -----
    1.Manager
    2.Worker

.A Manager helps issue out commands to other nodes. And in general ensure the cluster is staying connected.
	-One manager is considered the leader which primarily manages the cluster

.A Worker simply recieves these commands and carries them out.

.What are the benefits?
---------------------------
.Load Balancing
.Highly Available
.Scaling
.Rolling Updates
.Secure
.Self Healing


 ---------------           ---------------             ---------------
 |             |           |             |             |             |
 |             |           |  ( Leader ) |             |             |
 |  Manager    | <-------->|   Manager   | <---------->|   Manager   |
 |             |           |             |             |             |
 |             |           |             |             |             |
 ---------------           ---------------             ---------------
 							 |	  |   |
 							 |    |   | 
 							 |	  |   |					
 			------------------    |   --------------------			  
 			|					  |                      |
            |                     |                      |
            ⬇                     ⬇                      ⬇    
 ---------------           ---------------             ---------------
 |             |           |             |             |             |
 |             |           |             |             |             |
 |  Worker     |           |   Worker    |             |   Worker    |
 |             |           |             |             |             |
 |             |           |             |             |             |
 ---------------           ---------------             ---------------



 Getting Swarm Installed 
 -------------------------
 Goals:
 --------
 .Create a Swarm Instance
 .Learn how to create docker machine VMs
 .Learn how to add and remove nodes
 .Learn Basic node management for Swarm

Challenge:
----------
.Add a worker node and then promote the node to Manager


Create
--------
docker swarm init  --advertise-addr 192.168.99.100

To join Worker
--------------
docker swarm join --token TOKEN-STRING IP_of_MANAGER


docker info --> To get info about swarm
docker swarm leave 
docker node ls -> lists node in the swarm

Challenge Answer
-----------------
docker swarm join --token TOKEN-STRING IP_of_MANAGER
docker node promote dns_of_node  