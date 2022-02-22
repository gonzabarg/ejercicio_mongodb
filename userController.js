const User = require("./models/user");
const { firstUser } = require("./seeders/userSeeder");

module.exports = {
	show: async function (req, res) {
		firstUser;
		const users = await User.find();
		console.log(users);
		res.render("usuarios", { users });
	},

	create: async function (req, res) {
		const firstname = req.body.firstname;
		const lastname = req.body.lastname;
		const age = req.body.age;

		const user = new User({
			firstname: firstname,
			lastname: lastname,
			age: age,
		});

		try {
			const savedUser = await user.save();
			console.log(savedUser);
			res.redirect("/usuarios");
		} catch (error) {
			console.log(error);
		}
	},

	showById: async function (req, res) {
		const userToShow = await User.findById(req.params.id);
		console.log(userToShow);
		res.render("editar", { userToShow });
	},

	edit: async function (req, res) {
		const userToEdit = await User.updateOne(
			{ _id: req.params.id },
			{
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				age: req.body.age,
			}
		);
		console.log(req.body);
		res.redirect("/usuarios");
	},

	delete: async function (req, res) {
		const userToDelete = await User.remove({ _id: req.params.id });
		res.redirect("/usuarios");
	},
};
