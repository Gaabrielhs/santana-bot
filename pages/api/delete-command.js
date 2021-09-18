const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../../config.json');

export default async function handler(req, res) {
    const rest = new REST({ version: '9' }).setToken(token);

    const { commandId } = req.query

    try {
        await rest.delete(
            Routes.applicationGuildCommand(clientId, guildId, commandId)
        );

        res.status(200).json({ 'message': `Command for id ${commandId} deleted successfully` })
    } catch (error) {
        res.status(500).json({ 'error': error })
        console.error(error);
    }
}