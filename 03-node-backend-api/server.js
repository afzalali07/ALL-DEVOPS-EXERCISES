const http = require("node:http");
const taskRoutes = require("./routes/taskRoutes");

const server = http.createServer((request, response) => {
  taskRoutes(request, response);
});

server.listen(3000, () => {
  console.log("Task API running at http://localhost:3000/api/tasks");
});
