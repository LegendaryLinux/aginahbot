module.exports = {
    category: 'Helpful Messages',
    commands: [
        {
            name: 'setup',
            description: 'Get instructions on how to start playing!',
            longDescription: null,
            aliases: ['setup-guide'],
            usage: '`!aginah setup`',
            guildOnly: false,
            minimumRole: null,
            adminOnly: false,
            execute(message) {
                message.channel.send('The setup guide may be found here:\nhttps://berserkermulti.world/tutorial');
            }
        },
        {
            name: 'website',
            description: 'Get the link to the website.',
            longDescription: null,
            aliases: ['site', 'webpage'],
            usage: '`!aginah website`',
            guildOnly: false,
            minimumRole: null,
            adminOnly: false,
            execute(message) {
                message.channel.send('https://berserkermulti.world/');
            }
        },
        {
            name: 'code',
            description: 'Get the link to the GitHub repos associated with this project.',
            longDescription: null,
            aliases: ['github', 'git'],
            usage: '`!aginah code`',
            guildOnly: false,
            minimumRole: null,
            adminOnly: false,
            execute(message) {
                message.channel.send([
                    "Randomizer Repo: https://github.com/Berserker66/MultiWorld-Utilities",
                    "Enemizer Repo: https://github.com/Ijwu/Enemizer",
                    "Assembler Repo: https://github.com/CaitSith2/z3randomizer",
                    "AginahBot Repo: https://github.com/LegendaryLinux/AginahBot",
                ]);
            }
        },
    ],
};