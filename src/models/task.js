"use strict";
module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define(
		"Task",
		{
			name: DataTypes.STRING,
			description: DataTypes.TEXT,
			score: DataTypes.INTEGER,
			status: DataTypes.ARRAY(DataTypes.STRING),
			projectId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
		},
		{}
	);
	Task.associate = function (models) {
		// associations can be defined here
		Task.belongsTo(models.Project, {
			foreignkey: "projectId",
			as: "project",
		});

		Task.belongsTo(models.User, {
			foreignkey: "userId",
			as: "assigner",
		});
	};
	return Task;
};
