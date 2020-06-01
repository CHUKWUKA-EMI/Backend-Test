import express from "express";
import sequelize from "./DB/database";
import cors from "cors";
import users from "./Routes/Users";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/API", users);

app.get("/", (req, res) => {
	res.send("WELCOME TO BACKEND TEST");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
