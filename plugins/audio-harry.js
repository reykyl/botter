import { generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'

let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat,{
    text : `*🦉📩 Descubre Nuestras Últimas Novedades Mágicas!!!🏰*

_____________________________


Traemos para ti las mejores novedades que te
harán pasar un momento mágico con nuestro bot, no te las pierdas.!!!

Sigue nuestro canal y no te pierdas de las nuevas funciones mágicas que agregamos al bot 🤖🪄


https://whatsapp.com/channel/0029VbA1fHwHltYIjc93vc17

`
});
}


handler.command = ['potter']
handler.tags = ['social']
handler.help = ['potter']

export default handler
