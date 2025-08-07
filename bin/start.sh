#!/bin/bash

if [ "$(docker ps -a -q -f name=mern-test-mongo-1)" ]; then
    echo "[#] Bringing down old containers"
    docker compose down
    echo -e "[\u2713] Old containers removed."
fi

echo "[#] Pulling latest images from Docker Hub"
docker pull haydenmarshall65/ihs:mern-client
docker pull haydenmarshall65/ihs:mern-server
echo -e "[\u2713] Latest images pulled."

echo "[#] Starting MERN setup"
docker compose up -d
echo -e "[\u2713] MERN Started!"