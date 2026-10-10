# Exercise 13: Push a full-stack feedback app to Docker Hub

This project has a React frontend and a small Express API. The Dockerfile builds both and packages them into one image. Feedback is kept in memory and resets when the container restarts.

Build and run locally:

```bash
docker build -t feedback-fullstack:1.0 .
docker run -d --name feedback-fullstack -p 3000:3000 feedback-fullstack:1.0
```

Open `http://localhost:3000`, submit a message, and see it appear in the list. The Express server serves the built React page and its `/api/feedback` endpoints.

Tag the image for your Docker Hub account, sign in, and push it:

```bash
docker login
docker tag feedback-fullstack:1.0 YOUR_DOCKERHUB_USERNAME/feedback-fullstack:1.0
docker push YOUR_DOCKERHUB_USERNAME/feedback-fullstack:1.0
```

On another machine, pull and run it:

```bash
docker pull YOUR_DOCKERHUB_USERNAME/feedback-fullstack:1.0
docker run -d --name feedback-fullstack -p 3000:3000 YOUR_DOCKERHUB_USERNAME/feedback-fullstack:1.0
```

Open `http://localhost:3000`. Replace the username placeholder with your Docker Hub username. Never put a Docker Hub password or access token in this project.
