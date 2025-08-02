import fetch from 'node-fetch'
import { basename } from 'path'
import mime from 'mime-types'

let handler = async (m, { conn, text, args, command }) => {
  if (!text || !text.startsWith('https://files.catbox.moe/')) {
    return m.reply(`✳️ Usa el comando con un enlace válido de catbox.\n\n📌 Ejemplo:\n${command} https://files.catbox.moe/abcd12.mp4`)
  }

  await m.reply('Buscando el contenido...');
  try {
    const res = await fetch(text)
    if (!res.ok) throw new Error('❌ Error al descargar el archivo')

    const buffer = await res.buffer()
    const filename = basename(text)
    const mimetype = mime.lookup(filename) || 'application/octet-stream'

    if (mimetype.startsWith('image/')) {
      await conn.sendFile(m.chat, buffer, filename, '', m, false, { mimetype })
    } else if (mimetype.startsWith('video/')) {
      await conn.sendFile(m.chat, buffer, filename, '', m, false, { mimetype })
    } else if (mimetype.startsWith('audio/')) {
      await conn.sendFile(m.chat, buffer, filename, '', m, false, { mimetype, ptt: true })
    } else {
      await conn.sendFile(m.chat, buffer, filename, '', m, false, { mimetype, asDocument: true })
    }
  } catch (e) {
    console.error(e)
    m.reply(`❌ Error al descargar desde Catbox:\n${e.message}`)
  }
}

handler.help = ['dcatbox <url>']
handler.tags = ['downloader']
handler.command = /^dcatbox$/i

export default handler