let handler = async (m) => {
  const menu = `
🎒 *TIENDA POKÉMON - OBJETOS DISPONIBLES*

Usa: *.comprar [item] [cantidad]*

🎁 Artículos disponibles:

🧴 *pocion* – 💰 20 monedas  
▸ Recupera 10% de la vida máxima de tu Pokémon.

🍎 *comida* – 💰 15 monedas  
▸ Alimento básico para mantener activo a tu Pokémon. (uso futuro)

💊 *revivir* – 💰 50 monedas  
▸ Revive a tu Pokémon si ha sido derrotado. (uso futuro)

🧠 *xpboost* – 💰 35 monedas  
▸ Aumenta la experiencia ganada en peleas durante 1 batalla.

🧥 *capa* – 💰 60 monedas  
▸ Item especial que reduce el daño recibido en un combate. (futuro)

🔋 *bateria* – 💰 40 monedas  
▸ Restaura la energía si tu Pokémon está agotado. (uso futuro)

🧸 *juguete* – 💰 25 monedas  
▸ Sube el ánimo del Pokémon. (mejora la fidelidad, uso futuro)

💰 Escribe: *.comprar pocion 2*

Usa *.inventario* para revisar tus objetos.
  `.trim()
  m.reply(menu)
}

handler.help = ['tienda']
handler.tags = ['juegos']
handler.command = ['tienda']
handler.register = true

export default handler