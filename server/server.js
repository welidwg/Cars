import express from "express";
import mysql from "mysql";
import sequelize from "./databases/sequelize.js";
import bodyParser from "body-parser";
import userRouter from "./routes/UserRoutes.js";
import carRouter from "./routes/CarRoutes.js";
const app = express();
const port = process.env.PORT || 5000;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cars",
});
// connection.connect((err) => {
//   if (err) throw err;
//   console.log("connected to db");
// });
sequelize
  .sync()
  .then(() => {
    console.log("db synced");
  })
  .catch((err) => {
    console.log(err);
  });
//user routes
app.use(bodyParser.json());
app.use("/api/", userRouter);
app.use("/api/", carRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
