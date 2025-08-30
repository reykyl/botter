let handler = async (m, { conn, usedPrefix, command, args }) => {
  if (!(m.chat in global.db.data.chats)) 
    return conn.reply(m.chat, '❌ *¡ESTE CHAT NO ESTÁ REGISTRADO EN HOGWARTS*', m, rcanal);

  let chat = global.db.data.chats[m.chat];

  if (command === 'bot') {
    if (args.length === 0) {
      const estado = chat.isBanned ? '⚠️ *DESCARGADO*' : '⚡ *CARGADO*';
      const info = `🔋 *CENTRO DE CONTROL DE HARRY BOT* ⚡
╭━━━━━━━━━━━━━━━━━━━━━━━╮  
┃ *🎮 COMANDOS DE ENERGÍA:*  
┃ ✧ *${usedPrefix}potter on* – ⚡ Encender
┃ ✧ *${usedPrefix}potter off* – 💤 Apagar
╰━━━━━━━━━━━━━━━━━━━━━━━╯  
📡 *Estado actual:* ${estado}`;

      return conn.reply(m.chat, info, m, rcanal);
    }

    if (args[0] === 'off') {
      if (chat.isBanned) 
        return conn.reply(m.chat, '⚠️ *¡HARRY BOTTER YA ESTABA DESCARGADO EN ESTE CHAT!*', m, rcanal);

      chat.isBanned = true;
      return conn.reply(m.chat, '🪫 *¡HARRY BOTTER AHORA ESTÁ DESCARGADO EN ESTE CHAT!*', m, rcanal);
    } else if (args[0] === 'on') {
      if (!chat.isBanned) 
        return conn.reply(m.chat, '🔌 *¡HARRY BOTTER YA ESTABA CARGADO Y LISTO PARA COMBATIR!*', m, rcanal);

      chat.isBanned = false;
      return conn.reply(m.chat, '⚡ *¡HARRY BOTTER CARGADO Y LISTO PARA LA AVENTURA!*', m, rcanal);
    }
  }
};

handler.help = ['bot'];
handler.tags = ['grupo'];
handler.command = ['bot'];
handler.admin = true;

export default handler;
