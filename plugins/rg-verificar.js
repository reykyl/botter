import db from '../lib/database.js'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import { createHash } from 'crypto'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://qu.ax/JbNrT.jpg')
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)

  if (user.registered === true) return m.reply(`⚠️ Ya estás registrado.\n\n¿Quieres volver a registrarte?\nUsa *${usedPrefix}unreg* para eliminar tu registro.`)

  if (!Reg.test(text)) return m.reply(`⚠️ Formato incorrecto.\n\nUsa: *${usedPrefix + command} nombre.edad*\nEjemplo: *${usedPrefix + command} ${name2}.18*`)

  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply(`⚠️ El nombre no puede estar vacío.`)
  if (!age) return m.reply(`⚠️ La edad no puede estar vacía.`)
  if (name.length >= 100) return m.reply(`⚠️ El nombre es demasiado largo.`)

  age = parseInt(age)
  if (age > 1000) return m.reply(`👴 En Hogwarts no se acepta estudiante tan mayores.`)
  if (age < 5) return m.reply(`👶 ¡Alguien no ha recibido su carta aún!`)

  user.name = name + '✓'.trim()
  user.age = age
  user.regTime = +new Date
  user.registered = true
const textbot = 'Conviértete en el mejor hechicero o bruja de Hogwarts. ⚡'

  

  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)

  let regbot = `🟡 ¡Estudiante Registrado! 🟡\n\n`
  regbot += `👤 Nombre: *${name}*\n`
  regbot += `🎂 Edad: *${age} años*\n\n`
  regbot += `🧢 ¡Prepárate para la Magia!\n`
  regbot += `🔗 ${dev}`

  await m.react('⚡')
  return await conn.sendMessage(m.chat, {
  text: regbot,
  contextInfo: {
    externalAdReply: {
      title: '🧢 ¡Nuevo Estudiante Registrado!',
      body: textbot,
      thumbnailUrl: pp,
      sourceUrl: cn,
      mediaType: 1,
      showAdAttribution: true,
      renderLargerThumbnail: true
    }
  }
}, { quoted: m })
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']

export default handler
