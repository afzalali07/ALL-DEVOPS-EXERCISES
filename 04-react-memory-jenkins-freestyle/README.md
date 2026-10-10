# Exercise 4: React memory game with Jenkins Freestyle

A small React matching game. Run it locally with Node.js and npm:

```bash
npm install
npm run dev
```

## Build and publish with a Jenkins Freestyle job

1. Push this folder to a Git repository Jenkins can access.
2. In Jenkins, create **New Item → Freestyle project**.
3. Under **Source Code Management**, select Git and enter the repository URL and credentials if needed.
4. Ensure the Jenkins agent has Node.js and npm, then add an **Execute shell** build step (use **Execute Windows batch command** on a Windows agent):

```bash
npm install
npm run build
```

5. The static site is generated in `dist/`. Configure your preferred web server or hosting plugin to publish that directory. For a simple Jenkins artifact, add a post-build action to archive `dist/**`.

Jenkins needs a configured Node/npm installation or an agent with Node.js installed. This exercise builds and archives the site; serving it publicly requires a web server or hosting destination.
