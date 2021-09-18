const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../../config.json');

export default async function handler(req, res) {
    const rest = new REST({ version: '9' }).setToken(token);

    try {
        const result = await rest.get(
            Routes.applicationGuildCommands(clientId, guildId)
        );

        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ 'error': error })
        console.error(error);
    }
}