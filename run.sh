#!/bin/bash
  
# set desired local data volume, port, container name & image name here
IMAGE_NAME="gis-api:1.0"
CONTAINER_NAME="gis-api-dev"

# initial setup: 
# ln -s /home/josephs/workspace/docker/gis-api/ /var/www/html/

# remove the existing container
sudo docker stop ${CONTAINER_NAME} && sudo docker rm ${CONTAINER_NAME}

# build docker image. remove --network flag for production
sudo docker build --network=host -t ${IMAGE_NAME} .

# run the container. remove --network flag for production
sudo docker run --network=host --name ${CONTAINER_NAME} -p 4568:4567 -it -v ${PWD}/api.rb:/usr/src/app/api.rb ${IMAGE_NAME}
