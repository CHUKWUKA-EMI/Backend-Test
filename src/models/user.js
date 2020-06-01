"use strict";
import Sequelize from "sequelize";
import sequelize from "../DB/connection";

const User = sequelize.define(
	"User",
	{
		email: Sequelize.STRING,
		name: Sequelize.STRING,
		surname: Sequelize.STRING,
	},
	{}
);
User.associate = function (models) {
	// associations can be defined here
	User.hasMany(models.Project, {
		foreignkey: "userId",
		as: "assignee",
		onDelete: "CASCADE",
	});

	User.hasMany(models.Task, {
		foreignkey: "userId",
		as: "assignee",
		onDelete: "CASCADE",
	});
};

export default User;
