import express from "express";
import morgan from "morgan";
import postRoutes from "./routes/posts.routes.js";
import fileUpload from "express-fileupload";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middelwares
app.use(morgan("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

// Routes
app.use(express.static(join(__dirname, "../client/build")));
app.use(postRoutes);


export default app;
