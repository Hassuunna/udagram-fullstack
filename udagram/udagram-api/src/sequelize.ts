import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

//console.log(config.aws_rds);

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
});
