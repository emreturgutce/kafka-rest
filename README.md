## Kafka Basic Producer/Consumer REST Api

This is a basic kafka producer/consumer example built with Nodejs.

### Setup & Installation

```bash
git clone https://github.com/emreturgutce/kafka-rest.git
```

```bash
cd kafka-rest
```

```bash
docker-compose up
```

### Example Curl Request
```bash
curl -X POST -H "Content-Type: application/json" -d '{"message":"hello world"}' http://localhost:8080/users
```
