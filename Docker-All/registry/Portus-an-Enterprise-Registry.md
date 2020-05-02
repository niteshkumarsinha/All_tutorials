# Portus an Enterprise Docker Registry
--------------------------------------

Goals:
---------------

.Review the portus and how it works
.Learn how to install portus
.How to configure portus
.How to delete a tag and a repo

Challenge
---------------

.Push an image to Portus
.Pull an image from Portus
.Delete the image from Portus


## How to install

1. Prepare or Create certs for HTTPs for desired hostname
2. Set .env variables with desired hostname
3. Set nginx server name with desired hostname
4. Convert docker-compose.yml from v2 to v3.3
    a.) Remove all links (these are unnecessary now)
5. Add nginx default network alias for the desired hostname
6. Add CCONFIG_PREFIX=PORTUS env to portus service



### 1
Download the portus repository and change to examples folder -> secrets

    a. Create key
    --------------------
    > openssl genrsa -des3 -out server.key 4096

    b. create csr
    ----------------
    > openssl req -new -key server.key -out server.csr

    c. save orig key
    ----------------------
    > cp server.key server.key.org

    d. get passwordless key
    --------------------------
    > openssl rsa -in server.key.org -out server.key

    e. get cert 
    ------------
    > openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

    f. rename
    ----------
    >mv server.crt portus.crt
    >mv server.ket portus.key

### 2

Set environment variables:

vi .env
--------

MACHINE_FQDN=172.17.0.1

SECRET_KEY_BASE=b494a25faa8d22e430e843e220e424e10ac84d2ce0e64231f5b636d21251eb6d267adb042ad5884cbff0f3891bcf911bdf8abb3ce719849ccda9a4889249e5c2
PORTUS_PASSWORD=12341234
DATABASE_PASSWORD=portus

source the environment variables                      

. .env

### 3

Change server_name in nginx/nginx.conf

### 4

remove the links to convert to v3 in docker-compose.yml

### 5

Add alias 

nginx:
    image: library/nginx:alpine
    networks:
      default:
        aliases:
          - ${MACHINE_FQDN}
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./secrets:/secrets:ro
      - static:/srv/Portus/public:ro
    ports:
      - 80:80
      - 443:443


Run:
    docker-compose up -d
    docker-compose up -d nginx (it will bring up just this service)


Challenge answer
-------------------
docker login dockerhostname
docker push image:tag dockerhostname