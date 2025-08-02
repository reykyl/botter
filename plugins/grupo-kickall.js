import axios from 'axios'

let handler = async (m, { conn, text, participants }) => {

const groupAdmins = participants.filter(p => p.admin)
const botId = conn.user.jid
const groupOwner = groupAdmins.find(p => p.isAdmin)?.id
const groupNoAdmins = participants.filter(p => p.id !== botId && p.id !== groupOwner && !p.admin).map(p => p.id)
if (groupNoAdmins.length === 0) throw '*No hay muggles para eliminar.*'
for (let userId of groupNoAdmins) {
await conn.groupParticipantsUpdate(m.chat, [userId], 'remove')
await new Promise(resolve => setTimeout(resolve, 2000))
}
m.reply('*Eliminación de Muggle Exitosa.*')
}

handler.help = ['kickall']
handler.tags = ['group']
handler.command = ['kickall']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
