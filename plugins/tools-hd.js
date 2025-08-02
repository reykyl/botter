import fetch from 'node-fetch'
import FormData from 'form-data'

let handler = async (m, { conn, usedPrefix, command }) => {
  const quoted = m.quoted ? m.quoted : m
  const mime = quoted.mimetype || quoted.msg?.mimetype || ''

  
  if (!/image\/(jpe?g|png)/i.test(mime)) {
    await conn.sendMessage(m.chat, { react: { text: '❗', key: m.key } })
    return m.reply(`${emojis} Envía o *responde a una imagen* con el comando:\n*${usedPrefix + command}*`)
  }

  try {
    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })

  conn.reply(m.chat, `${emojis} Mejorando la calidad de la imagen....`, m, fake)  
    const media = await quoted.download()
    const ext = mime.split('/')[1]
    const filename = `mejorada_${Date.now()}.${ext}`

    const form = new FormData()
    form.append('image', media, { filename, contentType: mime })
    form.append('scale', '2')

    const headers = {
      ...form.getHeaders(),
      'accept': 'application/json',
      'x-client-version': 'web',
      'x-locale': 'es'
    }

    const res = await fetch('https://api2.pixelcut.app/image/upscale/v1', {
      method: 'POST',
      headers,
      body: form
    })

    const json = await res.json()

    if (!json?.result_url || !json.result_url.startsWith('http')) {
      throw new Error('No se pudo obtener la imagen mejorada desde Pixelcut.')
    }

    const resultBuffer = await (await fetch(json.result_url)).buffer()

    await conn.sendMessage(m.chat, {
      image: resultBuffer,
      caption: `
✨ Tu imagen ha sido mejorada al doble de resolución.
`.trim()
    }, { quoted: m })

    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
  } catch (err) {
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
    m.reply(`❌ Falló la mejora de imagen:\n${err.message || err}`)
  }
}

handler.help = ['hd']
handler.tags = ['herramientas', 'imagen']
handler.command = /^hd$/i

export default handler




/*import FormData from "form-data"
import Jimp from "jimp"
const handler = async (m, {conn, usedPrefix, command}) => {
  try {    
  await m.react('⚡')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ""
  if (!mime) return conn.reply(m.chat, `${emojis} Por favor, envie una imagen o responda a la imagen utilizando el comando.`, m, fake)
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`${emojis} El formato del archivo (${mime}) no es compatible, envía o responde a una imagen.`)
  conn.reply(m.chat, `${emojis} Mejorando la calidad de la imagen....`, m, fake)  
  let img = await q.download?.()
  let pr = await remini(img, "enhance")
  await conn.sendFile(m.chat, pr, 'thumbnail.jpg', listo, m, null)
  await m.react('🔔')
  } catch {
  await m.react('✖️')
}}
handler.help = ["hd"]
handler.tags = ["tools"]
handler.command = ["remini", "hd", "enhance"]
handler.register = true

export default handler

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    const availableOperations = ["enhance", "recolor", "dehaze"]
    if (availableOperations.includes(operation)) {
      operation = operation
    } else {
      operation = availableOperations[0]
    }
    const baseUrl = "https://inferenceengine.vyro.ai/" + operation + ".vyro"
    const formData = new FormData()
    formData.append("image", Buffer.from(imageData), {filename: "enhance_image_body.jpg", contentType: "image/jpeg"})
    formData.append("model_version", 1, {"Content-Transfer-Encoding": "binary", contentType: "multipart/form-data; charset=utf-8"})
    formData.submit({url: baseUrl, host: "inferenceengine.vyro.ai", path: "/" + operation, protocol: "https:", headers: {"User-Agent": "okhttp/4.9.3", Connection: "Keep-Alive", "Accept-Encoding": "gzip"}},
      function (err, res) {
        if (err) reject(err);
        const chunks = [];
        res.on("data", function (chunk) {chunks.push(chunk)});
        res.on("end", function () {resolve(Buffer.concat(chunks))});
        res.on("error", function (err) {
        reject(err);
        });
      },
    )
  })
}*/