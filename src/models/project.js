"use strict";
module.exports = (sequelize, DataTypes) => {
	const Project = sequelize.define(
		"Project",
		{
			name: DataTypes.STRING,
			body: DataTypes.TEXT,
			status: DataTypes.ARRAY(DataTypes.STRING),
			userId: DataTypes.INTEGER,
		},
		{}
	);
	Project.associate = function (models) {
		// associations can be defined here
		Project.belongsTo(models.User, {
			foreignkey: "userId",
			as: "assigner",
			onDelete: "CASCADE",
		});
	};
	return Project;
};
