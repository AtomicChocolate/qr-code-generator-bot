export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription(
			"Generates a QR code for the link given, either by replying to a link or by providing a link in the command"
		),
	async execute(interaction) {
		await interaction.reply("To do...");
		interaction.channel;
	},
};
