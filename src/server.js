import express from "express";
import bodyParser from "body-parser";

const app = express({ port: process.env.PORT });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
