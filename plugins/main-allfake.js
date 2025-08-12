import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import getMensajeSistema from '../lib/msmwarning.js';
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

// 👑 Información del Bot
global.creador = 'Wa.me/527299422344'
global.ofcbot = `Wa.me/${conn.user.jid.split('@')[0]}?text=⚡creador`
global.asistencia = 'Wa.me/527299422344'
global.namechannel = '⚡️𝙃𝙖𝙧𝙧𝙮 𝘽𝙤𝙩𝙩𝙚𝙧 ⚡ 𝘾𝙝𝙖𝙣𝙣𝙚𝙡'
global.namechannel2 = '⚡️𝙃𝙖𝙧𝙧𝙮 𝘽𝙤𝙩𝙩𝙚𝙧 ⚡'
global.namegrupo = '⚡ 𝙃𝙖𝙧𝙧𝙮 𝘽𝙤𝙩𝙩𝙚𝙧 ⚡'
global.namecomu = '⚡️𝙃𝙖𝙧𝙧𝙮 𝘽𝙤𝙩𝙩𝙚𝙧 ⚡ 𝘾𝙤𝙢𝙪𝙣𝙞𝙩𝙮'
global.listo = '⚡ *¡Aquí tienes lo que pediste, para pertenecer a Hogwarts!*'
global.fotoperfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => catalogo,)

// 🗞 Canal del Bot
global.idchannel = '120363398846935909@newsletter'
global.canalIdM = ["120363398846935909@newsletter", "120363398846935909@newsletter"]
global.canalNombreM = ["⚡️𝙃𝙖𝙧𝙧𝙮 𝘽𝙤𝙩𝙩𝙚𝙧 ⚡ 𝘾𝙝𝙖𝙣𝙣𝙚𝙡", "⚡️𝙃𝙖𝙧𝙧𝙮 𝘽𝙤𝙩𝙩𝙚𝙧 ⚡"]
global.channelRD = await getRandomChannel()


global.mensajes = getMensajeSistema();

//fechas
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

// 🔁 Reacciones Globales
global.rwait = '⚡'
global.done = '✅'
global.error = '✖️'
global.msm = '⚠️'

global.emoji0 = '*⚡(≧∇≦) ピカチュウ~! 🧃*\n'
global.emoji1 = '*⚡(o≧▽ﾟ)o ピッカ〜!! 🧃*\n'
global.emoji2 = '*⚡(✧ω✧) ピカ!! 🧃*\n'
global.emoji3 = '*⚡(｡♥‿♥｡) ピカチュウ！🧃*\n'
global.emoji4 = '*⚡(˘▾˘) ピィ〜カ〜！🧃*\n'
global.emoji5 = '*⚡ᰔᩚ ( ᜊ°-° )ᜊ ピカッ！.ᐟ .ᐟ 🧃*\n'
global.emojis = [emoji0, emoji2, emoji3, emoji4, emoji5].getRandom()
global.emoji = [emoji0, emoji2, emoji3, emoji4, emoji5].getRandom()

global.wait = '⚡ *Espera un momento estudiante...*'
global.waitt = global.wait
global.waittt = global.wait
global.waitttt = global.wait

global.botonCanal = {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.create({
        body: proto.Message.InteractiveMessage.Body.create({
          text: '✨ Pulsa el botón para unirte al Canal Oficial'
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: 'Harry BOTter by Reykyl'
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
          buttons: [
            {
              name: 'cta_url',
              buttonParamsJson: JSON.stringify({
                display_text: '✐ Canal Oficial',
                url: 'https://whatsapp.com/channel/0029VbA1fHwHltYIjc93vc17',
                merchant_url: 'https://whatsapp.com/channel/0029VbA1fHwHltYIjc93vc17'
              })
            }
          ]
        })
      })
    }
  }
}


global.edadaleatoria = ['10', '28', '20', '40', '18', '21', '15', '11', '9', '17', '25'].getRandom();
global.user2 = m.pushName || 'Anónimo';
global.verifyaleatorio = ['registrar', 'reg', 'verificar', 'verify', 'register'].getRandom();

//Enlaces
var canal = 'https://whatsapp.com/channel/0029VbA1fHwHltYIjc93vc17'
let canal2 = 'https://whatsapp.com/channel/0029VbA1fHwHltYIjc93vc17'
var git = 'https://github.com/Deylin-Eliac'
var github = 'https://github.com/Deylin-Eliac/Pikachu-bot' 

global.redes = [canal, canal2, git, github].getRandom()

//Imagen
let category = "imagen"
const db = './src/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.arrayBuffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = m.pushName || 'Anónimo'
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
let pp = null; try { pp = await conn.profilePictureUrl('50433191934@s.whatsapp.net', 'image') } catch (e) { pp = null } global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `120363402481697721@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `Reykyl creador ✨`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Reykyl creador✨,;;;\nFN:Reykyl creador\nitem1.TEL;waid=50433191934:50433191934\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pp ? await (await fetch(pp)).buffer() : null, thumbnail: null, sendEphemeral: true }}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }
}}, { quoted: m }





global.icono = [
'https://harryp.club/hb.jpg',
      'https://harryp.club/hb1.jpg',
      'https://harryp.club/hb2.jpg',
      'https://harryp.club/hb3.jpg'
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { /*newsletterJid: channelRD.id,*/ serverMessageId: 100, /*newsletterName: channelRD.name,*/ }, externalAdReply: { showAdAttribution: true, title: textbot, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}



export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}
