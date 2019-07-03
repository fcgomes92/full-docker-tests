import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "ok" });
});

if (process.env.NODE_ENV !== "testing") app.listen({ port: process.env.PORT });

export default app;
