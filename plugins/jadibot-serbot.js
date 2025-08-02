import { generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'

let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat,{
    text : `*🔧 Función En Desarrollo!!!*

____________________________

⚡ *¡Hola! Soy Harry Botter* 🪄🤖 ⚡\n\nActualmente soy un bot privado y no tengo la función de subbots.🔒\n

¡Pero puedes seguir disfrutando de mis funciones mágicas! 🤖✨

Sigue nuestro canal y agregaremos pronto esta función al bot 🪄🤖

https://whatsapp.com/channel/0029VbA1fHwHltYIjc93vc17
`

      });
}


handler.command = ['serbot', 'qr', 'code'];
handler.register = true;

export default handler
