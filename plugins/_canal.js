import { generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'

const handler = async (m, { conn }) => {
  const texto = `✨ Pulsa el botón para unirte al canal oficial`.trim()

  const messageContent = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({ text: texto }),
          footer: proto.Message.InteractiveMessage.Footer.create({ text: 'Harry Botter by Reykyl' }),
          header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
  {
    name: 'cta_url',
    buttonParamsJson: JSON.stringify({
      display_text: '✐ Canal oficial',
      url: 'https://whatsapp.com/channel/0029VbA1fHwHltYIjc93vc17',
      merchant_url: 'https://whatsapp.com/channel/0029VbA1fHwHltYIjc93vc17'
    })
  },
  {
    buttonId: '.creador',
    buttonText: { displayText: 'Creador' },
    type: 1
  }
]
          })
        })
      }
    }
  }

  const msg = generateWAMessageFromContent(m.chat, messageContent, {
    userJid: m.sender,
    quoted: m
  })

  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}

handler.command = /^([.#/!])?canal$/i
handler.register = true
handler.help = ['canal']
handler.tags = ['info']

export default handler
