const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('server').setDescription('Replies with guild info'),
    async execute(interaction) {
        await interaction.reply('Pong 🏓!')
    }
}