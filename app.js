import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hy");
});

export default app;
