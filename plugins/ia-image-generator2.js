/* Código creado por Deylin y API también
https://github.com/deylin-eliac 
  no quites créditos 
 Atte: Deylin-eliac*/

let handler = async (m, { text, conn }) => {
  if (!text) {
    return await conn.reply(m.chat, `${emojis} Escribe el prompt de la imagen. Ejemplo:\n.imagina un dragón azul volando en el espacio`, m, fake)
  }

  await conn.reply(m.chat, `Generando imagen de: "${text}", espera un momento...`, m, fake)

  try {
    const prompt = encodeURIComponent(text.trim())
    const imageUrl = `https://anime-xi-wheat.vercel.app/api/ia-img?prompt=${prompt}`

    
    const bloqueCodigo = ['```', 'Hola', '```'].join('\n')

    await conn.sendFile(
      m.chat,
      imageUrl,
      'imagen.jpg',
      `${bloqueCodigo}\n🧃 Imagen generada:\n${imageUrl}`,
      m
    )
  } catch (e) {
    console.error(e)
    m.reply(`❌ Ocurrió un error al generar la imagen:\n${e.message}`)
  }
}

handler.help = ['imagina <prompt>']
handler.tags = ['ia']
handler.command = ['imgia', 'imagina']
handler.register = true

export default handler