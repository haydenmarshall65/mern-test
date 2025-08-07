FROM node

# install curl for healthcheck testing
RUN apt-get update -y && apt-get install -y curl

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm", "run", "start"]