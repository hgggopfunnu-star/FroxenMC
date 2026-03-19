const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.once("ready", () => {
    console.log(`✅ FroxenMC Bot Online: ${client.user.tag}`);

    client.user.setPresence({
        status: "online", // online / idle / dnd / invisible
        activities: [
            {
                name: "game.blockhost.cloud",
                type: ActivityType.Watching
            }
        ]
    });
});

// error protection (good for Railway)
process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

client.login(process.env.TOKEN);
