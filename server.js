import http from "http";
import app from "./app.js";

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server runing on http://127.0.0.1:${port}`);
});
