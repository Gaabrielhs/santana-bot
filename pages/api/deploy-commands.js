const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../../config.json');

const commands = []
const commandFiles = fs.readdirSync('./bot/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`../../bot/commands/${file}`);
    commands.push(command.data.toJSON())
}

export default async function handler(req, res) {
    const rest = new REST({ version: '9' }).setToken(token);

    try {
        const result = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        res.status(200).json({ 
            'message': 'Successfully registered application commands.',
            'commands': result
        })
    } catch (error) {
        res.status(500).json({ 'error': error })
        console.error(error);
    }
}