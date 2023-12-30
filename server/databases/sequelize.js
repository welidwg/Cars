import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
  database: "cars",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
