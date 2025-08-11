# MERN Stack Example

To see where this all came from, read [this](https://www.mongodb.com/resources/languages/mern-stack-tutorial).

MERN stands for

 1. **M**ongoDB
 2. **E**xpress.js
 3. **R**eact.js
 4. **N**ode.js


## How this project works

This is an example source code for the IHS remake, using a few different smaller projects put together. For the client frontend code, we use Vite and React to create a responsive, easy to build JSX frontend. It uses Lucide-React for a component library, and styling is done with TailwindCSS. For the backend, work is done in Node.js and Express.js, creating a server that listens to a designated port number and connects to a MongoDB community server. The MongoDB server is run using a pre-built docker image. All this works together to create a website with a database to hold our papers.

This is all still the development only phase, and of course, there would be changes in production. We would be using the Azure CosmosDB, which is their version of MongoDB. It is hosted by Azure, so we do not have to worry about outages or down time. The connection would be different, and there is code detailing which to use based on environments, but overall the process would generally the same.

## How to get things up and running

