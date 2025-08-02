import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
  if (!m.quoted || !/image/.test(m.quoted.mimetype)) return m.reply('📸 Responde a una imagen para convertirla al estilo anime.')
  let img = await m.quoted.download()

const part1 = 'r8_d3b5';
const part2 = 'AbrsvWXAXkfSiy2yihY0Bx';
const part3 = 'RUeJM0jHHgM';

const token = part1 + part2 + part3;
  let api_token = token,

  let body = {
    version: "c826e480eddf51f3a1c5fd4b124d9e7ee4e65092ec1984a2c1b2599cbed7a214", // AnimeGANv2
    input: {
      image: `data:image/jpeg;base64,${img.toString('base64')}`
    }
  }

  m.reply('🎨 Procesando imagen en estilo anime, espera unos segundos...')

  let res = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Token ${api_token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  let json = await res.json()
  let getResult = json?.urls?.get
  if (!getResult) return m.reply('❌ Error al obtener la respuesta.')

  // Esperar a que termine el procesamiento
  let outputUrl = ''
  for (let i = 0; i < 20; i++) {
    let poll = await fetch(getResult, {
      headers: { 'Authorization': `Token ${api_token}` }
    })
    let pollJson = await poll.json()
    if (pollJson.status === 'succeeded') {
      outputUrl = pollJson.output
      break
    }
    await new Promise(res => setTimeout(res, 3000))
  }

  if (!outputUrl) return m.reply('⏳ Se tardó mucho. Intenta más tarde.')

  await conn.sendFile(m.chat, outputUrl, 'anime.jpg', '🎌 Aquí está tu imagen estilo anime', m)
}
handler.command = ['anim']
export default handler