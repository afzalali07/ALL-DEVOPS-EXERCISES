# Exercise 5: React memory game with Jenkins Pipeline

This is the same small matching game as Exercise 4, built and archived by a Jenkins Pipeline.

Run locally with Node.js and npm:

```bash
npm install
npm run dev
```

## Run it in Jenkins

1. Push this folder to a Git repository Jenkins can access.
2. In **Manage Jenkins → Tools**, configure NodeJS with the installation name `NodeJS` (or change that name in `Jenkinsfile`). Install the NodeJS plugin if it is not available.
3. Create a **Pipeline** job, choose **Pipeline script from SCM**, select Git, and point it at the repository containing this `Jenkinsfile`.
4. Run **Build Now**. The pipeline installs dependencies, builds the app, and archives the generated static site from `dist/`.

The archived site can be downloaded from the Jenkins build. To make it publicly available, configure a web server or hosting destination for the generated `dist/` files.
