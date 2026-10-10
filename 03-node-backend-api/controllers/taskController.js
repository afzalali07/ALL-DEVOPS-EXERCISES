const taskModel = require("../models/taskModel");

function list(response) {
  response.writeHead(200);
  response.end(JSON.stringify(taskModel.getAll()));
}

function create(request, response) {
  let body = "";
  request.on("data", (chunk) => {
    body += chunk;
  });
  request.on("end", () => {
    try {
      const { title } = JSON.parse(body);
      if (typeof title !== "string" || title.trim() === "") {
        response.writeHead(400);
        response.end(JSON.stringify({ error: "A task title is required" }));
        return;
      }

      response.writeHead(201);
      response.end(JSON.stringify(taskModel.add(title.trim())));
    } catch {
      response.writeHead(400);
      response.end(JSON.stringify({ error: "Request body must be valid JSON" }));
    }
  });
}

module.exports = { list, create };
