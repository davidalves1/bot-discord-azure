import { config } from 'dotenv'
import { Client } from 'discord.js'

config()

const { TOKEN_DISCORD } = process.env

const bot = new Client()

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`)
  console.log(`Exit ${bot.user.tag}: ctrl + c`)
})

bot.on('message', (msg) => {
  const { content } = msg
  const commands = {
    '!hello': 'Hello! Welcome to DevTech! :D',
    '!link': 'https://davidalves1.com',
  };

  commands[content] && msg.reply(commands[content]);

})

bot.login(TOKEN_DISCORD)

