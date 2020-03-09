Intro
------

Goals:
-------
Learn how to install docker compose
Learn what docker compose is
Why it is useful

Challenge:
----------
Deploy your phpMyAdmin and MySql deployment using docker compose


.Docker compose is a templated docker container deployment.
.Orchestrates bunch of docker commands in an easy to read way.


vi docker-compose.yml
------------------------
version: '3.1'

services:
	tomacat1:
		# currentDir_tomcat1
		image: tomcat:latest
		ports: 
			- 1001
			- 1002
			- 1003
	tomcat2:
		image: tomcat:latest
		ports:
			- 1004:80
			- 1005:8080
		environment:
			TEST_ENV_VAR: test1234


To run this template: 
-----------------------
		docker-compose up
		docker-compose -f 'file.yml' up
		docker-compose up -d   (runs as daemon)


Challenge Answer
--------------------
vi docker-compose.yml
---------------------

version: '3.1'

services:
  db:
    image: mysql:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
  adminer:
    image: adminer: latest
    restart: always
    ports: 
      - 8080:8080


Note: Here it is auto linked


To Run: docker-compose up -d
To Stop: docker-compose down