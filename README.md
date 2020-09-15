# AginahBot
A Discord bot designed to help organize and moderate Z3R Multiworld Games.  
Find it in use at [Berserker's MultiWorld Discord](https://discord.gg/B5pjMYy).

[Click here to add AginahBot to your Discord server!](https://discord.com/oauth2/authorize?client_id=682767791585099776&scope=bot&permissions=285240400)

## Current Features
- Automatic creation of race voice and text channels, and automatic assignment of permissions to prevent viewing
    an opposing team's chat
- Support casual multiworld voice and text channels, and automatic assignment of permissions on those channels
- Automatically delete ROM files, and compressed files containing them
- Organization features to help schedule games
- Alert players in game lobbies that their seeds are ready

## Prerequisites
- `unrar` should be installed on your system to process `.rar` files.

## Configuration
A `config.json` file is required to be present in the base directory of the repository. This file should contain
at minimum your Discord bot's secret key, a name for the SQLite database file, and a command prefix. 
A couple notes about the `.env` file:
- If the moderator role is present, it will be created on your server if it does not exist already. In either
case, the roleId will be stored in the database and used to grand additional functionality to all users with
this role or a higher one.

Example config:
```json
{
  "token": "your-token-here",
  "dbFile": "aginahBot.db.sqlite3",
  "commandPrefix": "!aginah ",
  "moderatorRole": "Moderator"
}
```

If you intend to create your own bot on Discord using the code in this repository, your bot will need
permissions granted by the permissions integer `285240400`.

The following permissions will be granted
to AginahBot:
- Manage Roles
- Manage Channels
- Read Text Channels & See Voice Channels
- Send Messages
- Manage Messages
- Embed Links
- Add Reactions
- Move Members (Voice Channels)

## Setup
```shell script
# Clone the repo
git clone https://github.com/LegendaryLinux/AginahBot

# Enter its directory
cd AginahBot

# Install required packages
npm install

# Run the bot
node bot.js
```