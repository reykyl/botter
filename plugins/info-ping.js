import speed from 'performance-now'
import { exec } from 'child_process'
import ws from 'ws'
import { generateWAMessageFromContent, proto } from '@whiskeysockets/baileys'

let handler = async (m, { conn }) => {
  let timestamp = speed()
  let latensi = speed() - timestamp

  exec('neofetch --stdout', async (error, stdout, stderr) => {
    let sysinfo = stdout.toString('utf-8').replace(/Memory:/, 'Ram:')

    const text = `
╭━━━⊰ ⚡ *Harry-Botter* ⚡ ⊱━━━╮
┃ ⚡ *Estado:* ¡Activo y cargado!
┃ 🕒 *Velocidad:* ${latensi.toFixed(4)} ms
╰━━━━━━━━━━━━━━━━━━━━━━━╯
`.trim()

    // Construir mensaje interactivo con botón cta_url en nativeFlowMessage
    const messageContent = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: text
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: 'Harry Botter by Reykyl'
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

    const msg = generateWAMessageFromContent(m.chat, messageContent, {})
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
  })
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']
handler.register = true

export default handler
