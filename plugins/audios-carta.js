import { generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'

let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat,{
    text : `*🦉📩 Tu Carta de Hogwarts ha Llegado!!!🪄*

_____________________________

¿Qué estás esperando para dejar de ser
muggle y comenzar a vivir la magia de Hogwarts?🏰🪄


https://www.whatsapp.com/channel/0029VbAwAWp1XquOC6FjR31C


⚠️*IMPORTANTE:⚠️* El Colegio no contiene bots y es ùnicamente para brujas y magos.
`
});
}


handler.command = ['carta']
handler.tags = ['social']
handler.help = ['carta']

export default handler
