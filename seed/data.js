import db from '../db/connection.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'test',
    email: 'test@gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

const products = [
{
  name: "Steel Series Apex Pro Keyboard",
  category: "gear",
  keywords: "keyboard",
  imgURL: "www",
  description:
    "Upgrade your accuracy with this SteelSeries Apex Pro mechanical gaming keyboard. Advanced OmniPoint switches make inputs feel fast and fluid, and the adjustable design lets you change the actuation distance to suit your play style. This SteelSeries Apex Pro mechanical gaming keyboard has a sturdy aluminum alloy frame that stands up to heavy use.",
  details:
    `First-of-its kind adjustable mechanical switches for customizable per-key sensitivity,
    8x faster response, 5x faster actuation, and 2x durability,
    OLED Smart Display delivers information straight from games and apps,
    Series 5000 Aircraft grade aluminum frame,
    Detachable soft touch magnetic wrist rest`,
  price: '199.99',
  productURL: "https://steelseries.com/gaming-keyboards/apex-pro"
},

]

await Product.insertMany(products)
console.log('Created users & products!')

// close database connection. done.
db.close()
}

insertData()