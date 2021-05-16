## Kafka Basic Producer/Consumer REST Api

This is a basic kafka producer/consumer example built with Nodejs.

### Setup & Installation

```sh
git clone https://github.com/emreturgutce/kafka-rest.git
```

```sh
cd kafka-rest
```

```sh
docker-compose up
```

### Example Curl Request
```sh
curl -X POST -H "Content-Type: application/json" -d '{"message":"hello world"}' http://localhost:8080/users
```

#### Output
```sh
*Message received: {"message": "hello world"}*
```
