import dotenv from "dotenv";
dotenv.config();

export default {
	development: {
		use_env_variable: "DEV_DATABASE_URL",
		dialect: "postgres",
	},
	test: {
		use_env_variable: process.env.TEST_DATABASE_URL,
		dialect: "postgres",
	},
	production: {
		use_env_variable: process.env.DATABASE_URL,
		dialect: "postgres",
	},
};
