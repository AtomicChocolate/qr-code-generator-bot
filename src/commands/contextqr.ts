import { ContextMenuCommandBuilder } from "@discordjs/builders";

export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new ContextMenuCommandBuilder().setName("Turn into QR").setType(3),
	async execute(interaction) {
		await interaction.reply("To do...");
		console.log(interaction.targetMessage.content);
		console.log("the j");
	},
};
