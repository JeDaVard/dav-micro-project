## NestJS application

### Technologies used in the app
Node.js, NestJs, PostgreSQL, Apache Kafka

### Flow/architecture overview
This is a monorepo with 2 services. First service is the API service ```micro-api```, which exposes an api for recording the data in the platform and immediately sends a response. Under the hood after receiving the response it streams the data into another server ```micro-srv```, which is the actual user service. This service makes a bulk insert to the DB.

### How to run
Pre-requirements: Node >= 14, NPM >= 6, Docker, around 10m time

1. Clone the repo
2. Open terminal and go to the project directory
3. run ```npm i```
4. run ```docker compose up``` or ```docker-compose up``` for older docker
5. run ```npm run start:micro-api:dev``` for api service, and ```npm run start:micro-srv:dev``` for the background service
6. please wait 1-2 minutes, it can be ready with some delay because of kafka
7. open http://localhost:5000/docs with the browser for swagger docs

### Note
There are a looooot of things to be improved, and that much unhandled corner cases
