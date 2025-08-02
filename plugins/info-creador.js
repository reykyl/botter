import { generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'

let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat,{
    image: { url: 'https://qu.ax/otHrW.jpg'
      },
    caption: `*🔧 Harry Botter 🤖🪄* by Reykyl

____________________________

*Reykyl*.
Trayendo para ti lo mejor y aquello desconocido en tu WhatsApp

Disfruta los bot y canales que creamos para ti.

`

      });
}


handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler
