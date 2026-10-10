const taskController = require("../controllers/taskController");

function taskRoutes(request, response) {
  response.setHeader("Content-Type", "application/json");

  if (request.url === "/api/tasks" && request.method === "GET") {
    taskController.list(response);
    return;
  }

  if (request.url === "/api/tasks" && request.method === "POST") {
    taskController.create(request, response);
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ error: "Route not found" }));
}

module.exports = taskRoutes;
