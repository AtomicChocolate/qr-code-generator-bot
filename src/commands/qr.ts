import GenerateQR from "../utils/generateqr";

export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("qr")
        .setDescription("Generates a QR code of the link you give me")
        .addStringOption((option) =>
            option
                .setName("input")
                .setDescription("What you want the QR code to link to")
                .setRequired(true)
        ),
    async execute(interaction) {
        const input = interaction.options.getString("input");
        const result = await GenerateQR(input);
        if (result === undefined) {
            interaction.reply({
                content: "I couldn't find a link in your request.",
                ephemeral: true,
            });
            return;
        }

        interaction.reply(result);
    },
};
