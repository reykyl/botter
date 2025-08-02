const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply(`${emojis} Tu ya eres admin.`);
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
   m.reply(`${emojis} Ya te di admin. `, m, fake);
  } catch {
    m.reply(`${emojis} Ocurrio un error.`, m, fake);
  }
};
handler.tags = ['owner'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin'];
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;

export default handler;