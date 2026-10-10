# Exercise 8: Build a custom image and push it to Docker Hub

This folder contains a simple web page and a Dockerfile that packages it with Nginx.

Build and run locally (replace `YOUR_DOCKERHUB_USERNAME` with your Docker Hub username):

```bash
docker build -t YOUR_DOCKERHUB_USERNAME/my-devops-page:1.0 .
docker run -d --name my-devops-page -p 8080:80 YOUR_DOCKERHUB_USERNAME/my-devops-page:1.0
```

Open `http://localhost:8080`. Sign in to Docker Hub and upload the image:

```bash
docker login
docker push YOUR_DOCKERHUB_USERNAME/my-devops-page:1.0
```

Check the repository on Docker Hub. Never put your Docker Hub password or access token in this folder. To stop and remove the local container:

```bash
docker stop my-devops-page
docker rm my-devops-page
```
