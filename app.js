import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev';
mongoose.connect(CONNECTION_STRING);

HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT || 4000);