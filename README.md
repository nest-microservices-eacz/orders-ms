# Client Gateway

# Dev

1. Clone the repository
2. Install dependencies
3. Create an `env` file based on the `env.template`
4. Start the NATS server
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
5. Have the microservices to be consumed up and running
6. Start the project with `npm run start:dev`