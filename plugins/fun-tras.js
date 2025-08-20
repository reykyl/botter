const handler = async (m, { conn }) => {
  const who = m.mentionedJid && m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.fromMe
      ? conn.user.jid
      : m.sender;

  const avatarUrl = await conn.profilePictureUrl(who, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const processedImageUrl = `https://some-random-api.com/canvas/gay?avatar=${encodeURIComponent(avatarUrl)}`;

  await conn.sendMessage(m.chat, {
    image: { url: processedImageUrl },
    caption: '🏳️‍🌈 𝙈𝙞𝙧𝙚𝙣 𝙖 𝙚𝙨𝙩𝙚 𝙏𝙧𝙖𝙨𝙫𝙚𝙨𝙩𝙞🏳️‍🌈'
  }, { quoted: m });
};

handler.help = ['trasvesti'];
handler.tags = ['fun'];
handler.command = ['trasvesti'];

export default handler;
