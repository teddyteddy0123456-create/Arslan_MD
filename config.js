const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFMNmRWQVhwTzR1Q2MzSW5TWm5zZmQrdElhZk1YWU80cGhqNTMybmxVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHBYUzEyL3RBSE9sRTZSYW9Cdzl1cDR0OG4wdncrUWJubnZncU1pRWpFdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3S0cxTXRpazV1d2RqQUtsRFN0V21wcm15UmZROVBjR3lFZWxxSWZoUzNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4czdPNDhMbk9hbG81bmdvRS9YTkhZMnplb0NCdGxYTWdHd1FDbmhnemlVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktFZUh0VEFGYzR6dlIyWmRpMWM0K0tScTN0Q2pza3VTOFBRSUNiWnlrbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ3cFpLQjdUR05DdjZOS0ZWWlAwRkJSRGdpUXRnMjU3R0FsMVlNWFdPRGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lXTERkS3dOS0t3ZW5WVUlxNFhjSUNIVHp2SVdQYTYreTdPOS8zQXAwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1kzSC9PNVQvbVFTY29BWmpLaTl5NlFNUDhOdTF0K2g1MzM2K3JCZzJ4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhOMmVXaG4vL2NjVGdLdDZnNVlBN3czYUpLamhkb2tEUnM0SmhpRVlpVU5YckV1bnhkaCtGZEVpU3RUWHVMcEorZzRYRW9FMFI5SFNac2dHbU9nM2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6InhidGpQVG5pWTRINzlzZVdlSnowU2V2TGpNY0ZzdnAxNUZvRE56bzZVbEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjhaMlRZRzlHIiwibWUiOnsiaWQiOiI5NDc4ODAzNzM2Mzo0NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJib3RoYW4iLCJsaWQiOiIxODE4NjI0NTQ1NTA2MjE6NDZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcnJ2SlVHRUlTQWk4Y0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOVExNbWFrR2g5QlFVZUx3WnQ3dWdQbVZDQWNPckFqZG5GdGMrT21heWlVPSIsImFjY291bnRTaWduYXR1cmUiOiJ3Y040MDMweFZLWU5Gd2VPV1kzNFRvWGt6STloTTdFWm04NkVHUjNQVmFxNys4VmFQY2pHTGdMK1I3ZjlKOGJ3Q1FrbDR6c205TTJZenBCUzZDcUZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTXRjc1lrUDBRZ1JPbEtVd1BIcDBCTzV3NmcyRnV1ZmYrS3V5RHlrNk1uODQrRUxQVkJ2V2xUb1BqUUE3ZE5MeGR3WEJ5NGVGcDNHUG1qaUVFWi9mZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4ODAzNzM2Mzo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUVXl6Sm1wQm9mUVVGSGk4R2JlN29ENWxRZ0hEcXdJM1p4YlhQanBtc29sIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTk2OTA3NjAsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVhlIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Teddy 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/scppny.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Teddy_Unlimited",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Teddy",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94788037363",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Teddy Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Teddy*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ch0xs6.jpeg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Teddy*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 
DEV: process.env.DEV || "94788037363",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
