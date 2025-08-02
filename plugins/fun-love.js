var handler = async (m, { conn, command, text }) => {
  if (!text) return conn.reply(
    m.chat,
    `⚡️💛 *Necesitas arrobar dos nombres para calcular el amor màgico...*\n\nEjemplo: *#${command} @alguien @alguna*`,
    m
  );

  let [nombre1, ...resto] = text.split(' ');
  let nombre2 = (resto || []).join(' ');

  if (!nombre2) return conn.reply(
    m.chat,
    `💫 *Ups... falta el segundo nombre,r.*\n\nUsa así: *#${command} @fulano @fulana*`,
    m
  );

  let porcentaje = Math.floor(Math.random() * 101); 
  let frases = [
  `⚡️💛 *${nombre1}* y *${nombre2}* tienen un *${porcentaje}%* de compatibilidad amorosa. ¡Viva el amor! 💖`,
  `🌩️ *${nombre1}* siente por *${nombre2}* con un *${porcentaje}%* de magia romántica. ✨`,
  `💘 Según los estudiantes, *${nombre1}* y *${nombre2}* tienen un *${porcentaje}%* de conexión amorosa💞`,
  `⚡ *Harry Botter detecta una energía amorosa del *${porcentaje}%* entre *${nombre1}* y *${nombre2}*. ¡Eso puede ir en aumento! 🥰`,
  `💓 *${nombre1}* y *${nombre2}* tienen un *${porcentaje}%* de probabilidad de ser la mejor pareja de Hogwarts ❤️‍🔥`,
  `💥 *${nombre1}* lanzó amortentia 💘 y *${nombre2}* recibió *${porcentaje}%* de daño emocional 🥺`,
  `🔥 *Dolores Umbridge* aprueba esta pareja con un *${porcentaje}%* de pasión ardiente entre *${nombre1}* y *${nombre2}* 🔥`,
  `🍃 *Neville Longbottom* dice que *${nombre1}* y *${nombre2}* florecen juntos con un *${porcentaje}%* de ternura 🌸`,
  `💫 *Hagrid* ha analizado su comportamiento y dice que *${nombre1}* y *${nombre2}* tienen un *${porcentaje}%* de pareja perfecta 🧬`,
  `🧡 *${nombre1}* atrapó el corazón de *${nombre2}* con una amortentia con un *${porcentaje}%* de efectividad 😍`,
  `🌟 ¡Harry y Ginny estarían orgullosos! *${nombre1}* y *${nombre2}* tienen un *${porcentaje}%* de historia épica 💘`,
  `🎇 El Profesor Dumbledor dice que esta relación tiene un *${porcentaje}%* de probabilidad de convertirse en un relacion hasta la muerte 📚`
]

  let resultado = frases[Math.floor(Math.random() * frases.length)];

  conn.reply(m.chat, resultado, m, {
    mentions: conn.parseMention(resultado)
  });
};

handler.help = ['ship', 'amor', 'pareja', 'love', 'compatibilidad']
handler.tags = ['fun']
handler.command = /^(ship|amor|pareja|love|compatibilidad)$/i

handler.group = true;
handler.register = true;

export default handler;
