import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import postRoutes from "./routes/posts.js";
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import morgan from "morgan"
import helmet  from "helmet";
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({origin: true, credentials: true}));
app.use(morgan('tiny'))
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

app.use("/posts", postRoutes);

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


const PORT = process.env.PORT || 5001;


mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
