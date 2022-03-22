# QR Code Generator Bot

A utility Discord bot that can generate QR codes with a given link. It can also add an emoji or small image to the center of the generated QR code.

~~You can add the bot with [this link](https://discord.com/api/oauth2/authorize?client_id=949174768756748338&permissions=0&scope=bot%20applications.commands).~~

If you're running this yourself, make sure you add a `.env` file in the root directory of the repository with the values the bot needs. Like so:

```.env
CLIENTID=<the client id of your application>
TOKEN=<the secret token of your application's bot>

(if you want to use debug mode, otherwise don't include these last 2 lines)
GUILDID=<the id of your server so the bot can refresh slash commands much quicker in development>
DEBUG=<true/false, if true the bot will only refresh slash commands in the given server>
```

Then, you can run it:

```bash
npm start
```

Or as a Docker container:

```bash
docker-compose build
docker-compose up -d
```

~~It's also available on [Docker Hub](https://hub.docker.com/repository/docker/atomicchocolate/discord-qr-code). Make sure you use the docker-compose.yml included in this repository and a .env file!~~

### Made with

- [Discord.js](https://discord.js.org/)
- [TypeScript](https://www.typescriptlang.org)
- [Node](https://nodejs.org/en/)
