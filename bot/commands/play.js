import ytSearch from '../modules/youtubeSearch.js'

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('play').setDescription('Play some music')
    .addStringOption(option =>
        option.setRequired(true).setName('song').setDescription("Song name or song link")
    ),
    async execute(interaction) {
        const song = interaction.options.getString('song')
        const songLink = await ytSearch(song)
        await interaction.reply(`Song requested: ${song} | Song link: ${songLink}`)
    }
}