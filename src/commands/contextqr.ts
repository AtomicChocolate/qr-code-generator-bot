import { ContextMenuCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import GenerateQR from "../utils/generateqr";

export default {};
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new ContextMenuCommandBuilder().setName("Turn into QR").setType(3),
    async execute(interaction) {
        if (interaction.targetMessage.content === "") {
            interaction.reply({
                content: "The message needs to have a link in it.",
                ephemeral: true,
            });
            return;
        }

        const result = await GenerateQR(interaction.targetMessage.content);
        if (result === undefined) {
            interaction.reply({
                content: "I couldn't find a link in the message.",
                ephemeral: true,
            });
            return;
        }

        interaction.reply(result);
    },
};
