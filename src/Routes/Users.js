import express from "express";
import db from "../DB/database";

const router = express.Router();

router.post("/users", async (req, res) => {
	const name = req.body.name;
	const surname = req.body.surname;
	const email = req.body.email;
	try {
		const existingUser = await db.user.findAll({ where: { email: email } });
		if (existingUser) {
			res.status(400).send("user already exists");
			throw new Error("user already exists");
		}

		const userData = await db.user.create({
			email: email,
			name: name,
			surname: surname,
		});
		console.log("user created successfully", userData.dataValues);
		res.status(200).json(userData);
	} catch (err) {
		throw err;
	}
});

router.get("/users", async (req, res) => {
	const name = req.body.name;
	const surname = req.body.surname;
	try {
		//searching the list of users by name and surname
		if (name && surname) {
			const users = await db.user.findAll({
				where: {
					name: name,
					surname: surname,
				},
			});
			res.status(200).json(users);
		} else {
			//getting list of all the users and taking the count for client-side pagination
			const allUsers = await db.user.findAndCountAll({ limit: 3 });
			res
				.status(200)
				.json({ usersList: allUsers.rows, numberOfUsers: allUsers.count });
		}
	} catch (err) {
		throw err;
	}
});
export default router;
