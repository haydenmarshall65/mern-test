#!/bin/bash

if [ "$(docker ps -a -q -f name=mern-test-mongo-1)" ]; then
    echo "[#] Bringing down old containers"
    docker compose down
    echo -e "[\u2713] Old containers removed."
fi

echo "[#] Starting MERN setup"
docker compose up -d
echo -e "[\u2713] MERN Started!"