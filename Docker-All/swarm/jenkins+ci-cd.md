Jenkins Overview
----------------------

>Jenkins is essentially an open source, java based, highly customizable automation server

>It is most typically used for automating tests, builds, and deployment for applications

>It is generally leveraged to create jobs that facilitate CI(Continuous Integration), CD(Continuous Delivery) and CD(Continuous Deployment)


CI (Continuous Integration)
-----------------------------
>CI is the idea of constantly integrating your code with all working copies. Checking to code is an constant working state and resolving merge issues immediately.

CD (Continuous Delivery)
-----------------------------
>Continuous Delivery is the idea of constantly having deployable code, but there tends to be a manual process of moving this to the various stages (dev-staging-prod)

CD (Continuous Deployment)
-----------------------------
>Continuous Deployment is the idea of having a truly automated way of moving from local development to production without virtually any human interaction beyond writing the automated tests and scripts.



Goals:
--------------
.jenkins as a container installation
.different install using a swarm
.overview of the interface 
.intall the plugins we need

Pulls and Run
-----------------
docker run -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home --name jenkins jenkins/jenkins:lts

