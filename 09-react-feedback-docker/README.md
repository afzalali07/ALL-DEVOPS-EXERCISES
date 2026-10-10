# Exercise 9: Containerize a React feedback app

This simple React app accepts comments and saves them in the browser's local storage. It does not need a backend.

Build the Docker image and start the container:

```bash
docker build -t feedback-react:1.0 .
docker run -d --name feedback-react -p 8080:80 feedback-react:1.0
```

Open `http://localhost:8080`, submit feedback, and refresh to see it persisted in that browser. Check the container with `docker ps` and its output with `docker logs feedback-react`.

Stop and remove it when done:

```bash
docker stop feedback-react
docker rm feedback-react
```
