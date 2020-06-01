import Sequelize from "sequelize";
import sequelize from "./connection";

import user from "../models/user";
import project from "../models/project";
import task from "../models/task";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user;
db.project = project;
db.task = task;

export default db;
