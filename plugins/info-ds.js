import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

if (global.conn.user.jid !== conn.user.jid) {
return conn.reply(m.chat, `${emojis} Utiliza este comando directamente en el número principal del Bot.`, m, fake);
}

let chatId = m.isGroup ? [m.chat, m.sender] : [m.sender]
let sessionPath = `./${sessions}/`

try {

let files = await fs.readdir(sessionPath)
let filesDeleted = 0
for (let file of files) {
for (let id of chatId) {
if (file.includes(id.split('@')[0])) {
await fs.unlink(path.join(sessionPath, file))
filesDeleted++;
break
}}}

if (filesDeleted === 0) {
await conn.reply(m.chat, `${emoji2} No se encontró ningún archivo que incluya la ID del chat.`, m, fake);
} else {
await conn.reply(m.chat, `${emoji2} Se eliminaron ${filesDeleted} archivos de sesión.`, m, rcanal);
conn.reply(m.chat, `${emojis} ¡Hola! ¿logras verme?`, m, fake);
}
} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err)
await conn.reply(m.chat, `${emojis} Hola Soy ${botname} Sigue El Canal y apoyanos porfavor.\n\n> ${channel}`, m, fake);
}

}
handler.help = ['ds', 'fixmsgespera']
handler.tags = ['info']
handler.command = ['fixmsgespera', 'ds']
handler.register = true

export default handler