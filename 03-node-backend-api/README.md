# Exercise 3: Node.js task-list API

Build and run a small backend project: an in-memory task list API, organized into a model, routes, and controller. It uses Node.js built-in modules and needs no dependencies (Node.js 18 or newer).

- `models/taskModel.js` stores and manages tasks.
- `controllers/taskController.js` handles API requests.
- `routes/taskRoutes.js` maps URLs to controller functions.
- `server.js` starts the HTTP server.

Start the server:

```bash
node server.js
```

Try these routes in a browser or terminal:

```bash
curl http://localhost:3000/api/tasks
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d "{\"title\":\"Practice Git\"}"
curl http://localhost:3000/api/tasks
```

The POST route adds a task and the GET route lists tasks. Data resets when the server stops. To push this project, create a GitHub repository and run:

```bash
git init
git add .
git commit -m "Build a small Node task API"
git branch -M main
git remote add origin https://github.com/afzalali07/node-task-api.git
git push -u origin main
```
