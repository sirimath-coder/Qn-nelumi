const config = require('../settings')
const os = require('os')
const { cmd, commands } = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

//01.ALIVE MSG
cmd({
    pattern: "alive",
    react: "👋",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const moment = require("moment-timezone");
const date = moment().tz("Asia/Colombo").format("YYYY-MM-DD");
const time = moment().tz("Asia/Colombo").format("HH:mm:ss");
const hour = moment().tz("Asia/Colombo").format("HH");
const minute = moment().tz("Asia/Colombo").format("mm");

const greeting = hour >= 0 && hour < 12 ? '⛅ සුභ උදෑසනක්..!' :
                 hour >= 12 && hour < 15 ? '🌤️ සුභ දහවල් කාලයක්..!' :
                 hour >= 15 && hour < 18 ? '🌥️ සුභ සවස් කාලයක්..!' :
                 hour >= 18 && hour <= 23 ? '🌚🌜 සුභ රාත්‍රියක්..!' :
                 '';
  
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()

let monspace ='```'
let monspacenew ='`'
if(config.ALIVE === "default") {
const buttons = [
  {buttonId: prefix + 'menu' , buttonText: {displayText: 'COMMANDS MENU'}, type: 1},
  {buttonId: prefix + 'ping' , buttonText: {displayText: 'BOT\'S SPEED'}, type: 1}
]
const buttonMessage = {
    image: {url: "https://i.ibb.co/Jj3HpNX7/c36397d1055f9e75.jpg" },
    caption: `*${greeting} ${pushname}*

> *ᴅᴀᴛᴇ:* ${date}  
> *ᴛɪᴍᴇ:* ${time}  

⭐ *Hello, I'm 𝐐𝐔𝐄𝐄𝐍 𝐂𝐇𝐎𝐎𝐓𝐘 𝐍𝐄𝐋𝐔𝐌𝐈 𝐌𝐃 Watsapp User Bot, this is a hard-working project of our team, and it's strictly forbidden to own anything here without permission.*`,
    
    footer: "> *_Created by_* 👨‍💻 :- *_Pahasara_Tech_*",
    buttons: buttons,
    headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage)}
else {
  const buttons = [
    {buttonId: prefix + 'menu' , buttonText: {displayText: 'COMMANDS MENU'}, type: 1},
    {buttonId: prefix + 'ping' , buttonText: {displayText: 'BOT\'S SPEED'}, type: 1}
  ]
  const buttonMessage = {
      image: {url: "https://i.ibb.co/Jj3HpNX7/c36397d1055f9e75.jpg" },
      caption: config.ALIVE,
      footer: "> *_Created by_* 👨‍💻 :- *_Pahasara_Tech_*",
      buttons: buttons,
      headerType: 4
  }

  return await conn.buttonMessage2(from, buttonMessage, mek)}
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "ping",
    react: "✅",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const qMessage = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" },
    message: {
        contactMessage: {
            vcard: 
                'BEGIN:VCARD\n' +
                'VERSION:3.0\n' +
                'FN:QUEEN-CHOOTY-NELUMI-MD\n' +
                'ORG:QUEEN-CHOOTY-NELUMI-MD\n' +
                'TEL;type=CELL;type=VOICE;waid=94757286833:+94 75 728 6833\n' +
                'EMAIL:sanujapehasara@gmail.com\n' +
                'END:VCARD'
                    },
             contacts: { displayName: "CHOOTY-NELUMI-MD", contacts: [{ vcard: '' }] }}};
    
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: qMessage });
var final = new Date().getTime();
return await conn.edite(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
  pattern: "menu",
  react: "🗃️",
  alias: ["panel","list","commands"],
  desc: "Get bot\'s command list.",
  category: "main",
  use: '.menu',
  filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(os.hostname().length == 12 ) hostname = 'replit'
else if(os.hostname().length == 36) hostname = 'heroku'
else if(os.hostname().length == 8) hostname = 'koyeb'
else hostname = os.hostname()
let monspace ='```'
const buttons = [
{buttonId: prefix + 'downmenu' , buttonText: {displayText: 'DOWNLOAD COMMANDS MENU'}, type: 1},
{buttonId: prefix + 'searchmenu' , buttonText: {displayText: 'SEARCH COMMANDS MENU'}, type: 1},
{buttonId: prefix + 'convertmenu' , buttonText: {displayText: 'CONVERT COMMANDS MENU'}, type: 1},
{buttonId: prefix + 'logomenu' , buttonText: {displayText: 'LOGO COMMANDS MENU'}, type: 1},
{buttonId: prefix + 'othermenu' , buttonText: {displayText: 'OTHER COMMANDS MENU'}, type: 1},
{buttonId: prefix + 'ownermenu' , buttonText: {displayText: 'OWNER COMMANDS MENU'}, type: 1},
{buttonId: prefix + 'adminmenu' , buttonText: {displayText: 'ADMIN COMMANDS MENU'}, type: 1}
]
const buttonMessage = {
  image: {url: config.LOGO},
  caption: `${monspace}👋 Hello ${pushname}${monspace}

*🥀 QUEEN-CHOOTY-NELUMI-MD commands menu...*
  
> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Platform:* ${hostname}`,
  footer: config.FOOTER,
  buttons: buttons,
  headerType: 4
}
return await conn.buttonMessage2(from, buttonMessage, mek)
} catch (e) {
reply('*Error !!*')
l(e)
}
})
