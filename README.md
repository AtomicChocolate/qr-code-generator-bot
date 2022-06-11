# QR Code Generator Bot

A utility Discord bot that can generate QR codes with a given link. It can also add an emoji or small image to the center of the generated QR code.

You can add the bot with [this link](https://discord.com/api/oauth2/authorize?client_id=955649355740770324&permissions=0&scope=bot%20applications.commands).

If you want to have everything local, first clone the repository:

```bash
git clone https://github.com/AtomicChocolate/qr-code-generator-bot.git
```

Add a .env file in the root of the repository:

```.env
CLIENTID=<the client id of your application>
TOKEN=<the secret token of your application's bot>

(if you want to debug the app, otherwise don't include these last 2 lines)
GUILDID=<the id of your server>
DEBUG=<true/false, if true the bot will only refresh slash commands in the given server to make development quicker>
```

Then, build and run it

```bash
npm install # Install dependencies
npm run build
npm start
```

Or build the Docker container:

```bash
docker-compose build
docker-compose up -d
```

### Made with

-   [Discord.js](https://discord.js.org/)
-   [TypeScript](https://www.typescriptlang.org)
-   [Node](https://nodejs.org/en/)
