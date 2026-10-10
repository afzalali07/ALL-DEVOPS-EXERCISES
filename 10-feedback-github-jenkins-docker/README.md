# Exercise 10: Build and deploy feedback app with GitHub, Jenkins, and Docker

This folder contains a simple React feedback application, its `Dockerfile`, and a `Jenkinsfile` that builds the image, pushes it to Docker Hub, and runs it on the Jenkins agent.

## 1. Push the app to GitHub

Create a GitHub repository for this exercise, then run from this folder:

```bash
git init
git add .
git commit -m "Add Dockerized feedback app"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## 2. Prepare Jenkins and Docker

Install Jenkins and Docker on a machine/agent that can build images. Ensure the Jenkins agent can run `docker` commands. In Jenkins, store Docker Hub credentials in **Manage Jenkins → Credentials** (username plus access token); do not put secrets in the repository.

## 3. Create a Jenkins Pipeline job

Create a Pipeline job configured as **Pipeline script from SCM**, select Git, enter your repository URL, and set the script path to `Jenkinsfile`. Add a Git credential if the repository is private. In `Jenkinsfile`, replace `YOUR_DOCKERHUB_USERNAME` with your Docker Hub username. Create a Jenkins **Username with password** credential with ID `docker-hub`; use a Docker Hub access token as the password. Run the job. It builds and pushes the image, then starts it on the Jenkins agent at port 8080.

## 4. Run the deployed image

If you want to run the pushed image on another Docker host, pull and run it:

```bash
docker pull YOUR_DOCKERHUB_USERNAME/feedback-app:latest
docker run -d --name feedback-app -p 8080:80 YOUR_DOCKERHUB_USERNAME/feedback-app:latest
```

Open `http://localhost:8080`. The app keeps feedback in React state, so entries clear when the page is refreshed. A public deployment needs a reachable Docker host and suitable firewall rules.
