import FindURL from "./findurl";
import QRCode from "qrcode";
import { Buffer } from "node:buffer";
import { MessageAttachment, MessageEmbed } from "discord.js";

async function GenerateQR(message: string) {
    const URL = FindURL(message);
    if (URL === undefined) {
        return;
    }

    const qr = await QRCode.toDataURL(URL);
    const buffer = Buffer.from(qr.split(",")[1], "base64");
    const attachment = new MessageAttachment(buffer, "qrcode.png");

    const reply = new MessageEmbed()
        .setTitle(
            URL.length <= 256
                ? URL
                : "(URL too long to fit, so it's in the description.)"
        )
        .setURL("https://" + URL)
        .setDescription(URL.length <= 256 ? "" : URL) //Put long URLs here if they can't fit in the title
        .setImage("attachment://qrcode.png");
    return { embeds: [reply], files: [attachment] };
}

export default GenerateQR;
