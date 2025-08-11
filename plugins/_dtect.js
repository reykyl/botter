let WAMessageStubType = (await import('@whiskeysockets/baileys')).default

export async function before(m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}
let chat = global.db.data.chats[m.chat]
let usuario = `@${m.sender.split`@`[0]}`
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || `${catalogo}`

let nombre, foto, edit, newlink, status, admingp, noadmingp

nombre = `
⚡️ *¡Cambio de nombre!*
🐭 Estudiante: *${usuario}*
✏️ Ha renombrado el grupo con su Pluma.

📛 Nuevo nombre:
*「 ${m.messageStubParameters[0]} 」*
🔁 ¡Un nuevo capítulo comienza!
`

foto = `
🖼️ *¡Cambio de imagen!*
🐭 *${usuario}* ha lanzado un *hechizo* sobre:
📍 *${groupMetadata.subject}*

✨ ¡La imagen del grupo ha sido hechizada!
`

edit = `
🛠️ *¡Permisos actualizados!*
🧑‍🏫 Estudiante: *${usuario}*

⚙️ Configuración del grupo:
${m.messageStubParameters[0] == 'on'
  ? '🔒 Solo *Estudiantes* (admins) pueden modificar la configuración.'
  : '🔓 *Todos los miembros* pueden usar el Menú de configuración.'
}
`

newlink = `
🔗 *¡Nuevo enlace generado!*
👨‍💼 Estudiante: *${usuario}*
🌐 Ha utilizado *reparo* y restablecido el camino al colegio.

🚪 Nuevo acceso al grupo disponible.
¡Atrapa la invitación antes de que desaparezca!
`

status = `
📢 *Estado del grupo actualizado*

🔁 Acción realizada por: *${usuario}*
🎮 Estado actual:
${m.messageStubParameters[0] == 'on'
  ? '🔒 El grupo está *cerrado* — solo los Prefectos pueden hablar.'
  : '🔓 El grupo está *abierto* — todos los Estudiantes pueden participar.'
}
🎤 ¡Ahora pueden charlar!
`

admingp = `
🧢 *¡Subida de rango!*
🎖️ *@${m.messageStubParameters[0].split`@`[0]}* ha sido nombrado a *Prefecto (Admin)*

👑 Acción autorizada por: *${usuario}*
⚡ ¡Que aproveche su nuevo poder con sabiduría!
`

noadmingp = `
❌ *¡Cambio de rol!*
😿 *@${m.messageStubParameters[0].split`@`[0]}* ha perdido su rango de *Prefecto*

📉 Acción realizada por: *${usuario}*
🍃 Volvió a su antiguo rango.
`

if (chat.detect && m.messageStubType == 21) {
await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 22) {
await conn.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 23) {
await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 25) {
await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 26) {
await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 29) {
await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })

return;
} if (chat.detect && m.messageStubType == 30) {
await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })

} else {
//console.log({ messageStubType: m.messageStubType,
//messageStubParameters: m.messageStubParameters,
//type: WAMessageStubType[m.messageStubType],
//})
}}
