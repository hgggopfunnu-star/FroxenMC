const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.once("ready", () => {
    console.log(`✅ FroxenMC Bot Online: ${client.user.tag}`);

    client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "FroxenMC Network",
                type: ActivityType.Playing
            }
        ]
    });
});

// Railway crash protection
process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

client.login(process.env.TOKEN);
