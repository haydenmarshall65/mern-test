#!/bin/bash

#build the client code
echo -e "\n [#] Building client container image...\n"
docker build -t mern-client code/client/.
echo -e "\n [\u2713] Client container image built!\n"

#build the server code
echo -e "\n [#] Building server container\n"
docker build -t mern-server code/server/.
echo -e "\n [\u2713] Server container image built!\n"
echo "Start with ./bin/start.sh!"