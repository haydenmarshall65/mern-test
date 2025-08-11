# MERN Stack Example

To see where this all came from, read [this](https://www.mongodb.com/resources/languages/mern-stack-tutorial).

MERN stands for

 1. **M**ongoDB
 2. **E**xpress.js
 3. **R**eact.js
 4. **N**ode.js


## How this project works

This is an example source code for the IHS remake, using a few different smaller projects put together. For the client frontend code, we use Vite and React to create a responsive, easy to build JSX frontend. It uses Lucide-React for a component library, and styling is done with TailwindCSS. For the backend, work is done in Node.js and Express.js, creating a server that listens to a designated port number and connects to a MongoDB community server. The MongoDB server is run using a pre-built docker image. All this works together to create a website with a database to hold our papers. 

The website code is split up into two directories: `code/client` and `code/server`. In each lies the corresponding code for the Vite/React frontend and the Node/Express backend. The MongoDB Community Server is a pre-built docker image, distributed by the Docker team. For more information on that, visit the [docker image page](https://hub.docker.com/r/mongodb/mongodb-community-server).

The other two directories are `bin` and `mongo`. The `bin` directory holds any binaries (executable files) that are used with the project. I created a `build.sh` script and a `start.sh` script for building and starting the docker containers. `build.sh` will also attempt to push to the docker hub repository `haydenmarshall65/ihs`. `start.sh` looks if the containers are running currently. If they are up, the script will bring them down first, and pull the images from docker hub. Then, it will start the containers.
>Be sure to log in with docker hub credentials in order for this push/pull to be successful. Otherwise the image will not be pushed/pulled to the docker hub, and starting the container will not show any changes!
The `mongo` directory is the volume that gets mounted with the `mongo` docker image. This was optional, but in order to maintain data persistence on such a small-scale test, I chose to opt-in. The directory is essentially copied by docker into the container on start, and any changes are copied into the directory by docker after bringing down the service.

This is all still the development only phase, and of course, there would be changes in production. We would be using the Azure CosmosDB, which is their version of MongoDB. It is hosted by Azure, so we do not have to worry about outages or down time. The connection would be different, and there is code detailing which to use based on environments, but overall the process would generally the same.

## How to get things up and running

Start by going into the `code/server` directory and creating a .env file following the specifications of the `code/server/.env.example` file provided. You will need to specify what port you want your app to run on, as well as the MongoDB connection URL. If using the docker image as detailed in the `docker-compose.yml` file, you will need to provide the docker container name in the connection URL instead of localhost. 
> When docker spins up a container in a network of containers, the containers can reach each other by using their names under the network. The MongoDB container is under the name "mongo", so in order to connect inside of the "mern-server" container, you need to use the "mongo" name instead of anything like "localhost" or "127.0.0.1". Doing so will give you a connection error. If you use MongoDB Atlas or one of their provided solutions, simply use the Atlas connection name instead.

After you have done this, next up you need to create the MongoDB directory that gets mounted into the container. The MongoDB image is set to look for a `mongo/data` directory and a .env, where it will clone data from the container so that you can persist all data. To do so, run the following commands (if none of them are already present):
```bash
mkdir mongo/data
sudo chown -R 999:999 mongo/data
```
This creates the `data/` directory that is mounted in the mongo container as `data/db` and is where MongoDB writes all of its data to. Every time you spin up the container, it will be auto-populated with this data.

In the `mongo/.env` file, make sure to follow the `.env.example` to include the database credentials that are necessary in order to log in to the MongoDB instance.

### Running the Code

Go into the `code/client` directory and running the following command:
```bash
npm run dev
```

Afterwards, go into the `code/server` directory and run the command:
```bash
npm run start
```
Make sure all .env files have been properly set up. If all is established, you should be able to run the following scripts:
```bash
./bin/build.sh
./bin/start.sh
```
And the containers will be up and running! Everything should be set, and this is a successful test of the MERN stack using Docker, Vite, React, Node, Express, TailwindCSS, and MongoDB! Congratulations! Great work.