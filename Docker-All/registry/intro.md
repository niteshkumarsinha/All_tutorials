# Docker Hub

## Goals

.Learn some registry terminology
.How to use docker hub
.Pushing and pulling images
.Understanding Web Hooks

## Challenge

.Push a private image to your own personal account

## Terminology

.A Registry manages and stores image repositories
.An image repository is a collection of tagged images
.A tag is generally a variation or version of a particular docker image
.A namespace is generally the account or team that identified that manages that repository
.Standard Syntax - <registry>/<namespace>/<repo-name>:<tag> - docker.io/library/openjdk:8-jdk

--To push to docker hub we need to login

docker login
or
docker login docker.io

docker tag nkuma255/flask_app nkuma255/flask_app:test
docker push nkuma255/flask_app:test
or
docker tag nkuma255/flask_app docker.io/nkuma255/flask_app:test2
docker push nkuma255/flask_app:test2

--To Logout

docker logout

## Challenge Answer

docker tag nkuma255/ununtu_dev docker.io/nkuma255/ununtu_dev:test
docker push nkuma255/ununtu_dev:test
