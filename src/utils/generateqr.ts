export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("qr")
		.setDescription(
			"Generates a QR code of the link/image you reply to or provide"
		),
	async execute(interaction) {
		await interaction.reply("To do...");
		interaction.channel;
	},
};
