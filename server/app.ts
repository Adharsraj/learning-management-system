import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { ErorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import employeeRouter from "./routes/employee.route";
export const app = express();

//body-parser
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000/"],
  })
);


app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);
app.use("/api/v1", employeeRouter);



app.get("/test", (req, res) => {
  res.status(200).json({ success: true, message: "Api is working fine" });
});

app.all("*", (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErorMiddleware);
