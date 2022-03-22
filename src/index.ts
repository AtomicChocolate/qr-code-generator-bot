require("dotenv").config();
const fs = require("node:fs");
const { Client, Collection, Intents } = require("discord.js");

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGES,
	],
});

client.commands = new Collection();
const commandFiles = fs
	.readdirSync(`${__dirname}/commands`)
	.filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
	const command = require(`${__dirname}/commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once("ready", () => {
	console.log("Ready to go!");
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: "An error occurred...",
			ephemeral: true,
		});
	}
});

client.login(process.env.TOKEN);
