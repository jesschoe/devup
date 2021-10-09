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
  keywords: "keyboard, gaming",
  imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633727697/devup/steelseriesapexpro_rph3hn.jpg",
  description:
    "Upgrade your accuracy with this SteelSeries Apex Pro mechanical gaming keyboard. Advanced OmniPoint switches make inputs feel fast and fluid, and the adjustable design lets you change the actuation distance to suit your play style. This SteelSeries Apex Pro mechanical gaming keyboard has a sturdy aluminum alloy frame that stands up to heavy use.",
  details: [
    "First-of-its kind adjustable mechanical switches for customizable per-key sensitivity",
    "Faster response, 5x faster actuation, and 2x durability",
    "OLED Smart Display delivers information straight from games and apps",
    "Series 5000 Aircraft grade aluminum frame",
    "Detachable soft touch magnetic wrist rest"
  ],
  price: "199.99",
  productURL: "https://steelseries.com/gaming-keyboards/apex-pro"
},
{
  name: "Mount-It! Single Monitor Arm Desk Mount ",
  category: "accessories",
  keywords: "mount, monitor",
  imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633727271/devup/mountit-monitor-arm_sh5bbf.jpg",
  description: "Free up space on your desktop with this Mount-It! full-motion single monitor desk mount. The full-motion arms tilt, swivel and adjust in height for a customized setup, while the cable management system tucks all connecting cables away, increasing neatness. This Mount-It! full-motion single monitor desk mount has a clamp at the base for easy, secure installation on the edge of a desk.",
  details: [
    "Gas spring monitor arm is heavy duty, counterbalanced and makes for effortless adjustments and comes with integrated, hide-away cable management.", 
    "Aircraft grade aluminum alloy construction will stand the test of time.", 
    "Monitor arm desk mount quickly mounts to desks and comes with all mounting hardware, tools, and instructions necessary for assembly.", 
    "Quick-release detachable VESA plate mounts to back of monitor first, then slides onto arm in seconds!"
  ],
  price: "74.99",
  productURL: "https://mount-it.com/products/mount-it-gas-spring-single-monitor-desk-mount-mi-1771?variant=31453302096010&gclid=CjwKCAjw2P-KBhByEiwADBYWCmPvEGZMQQpIioNqTAostnHKObzkcknr6_TGqWSkV_oqvtW3sRG46BoC0fkQAvD_BwE"
},
{
  name: "UXL Desk Mat",
  category: "accessories",
  keywords: "desk, mat",
  imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633727267/devup/deskmat_q7tovg.jpg",
  description: "We were tired of the low quality desk mats out there so we designed and made our own. Made from vegan leather, it's been designed to be clean and minimal. It will protect your desk whilst also making it easier to use your mouse.",
  details: [
    '80cm x 45cm (31.5" x 17.7")', 
    "Used by employees from Apple, Amazon, GoPro and many more.", 
    "Designed to be super minimal and clean, our desk mats can add some much needed texture and organisation to your desk.", 
    "Made from vegan leather which is specially designed to be durable and long-lasting.", 
    "It will also protect your desk from any spills, scratches or scrapes."
  ],
  price: "79.00",
  productURL: "https://ulxstore.com/products/black-leather-desk-mat"
},
{
  name: "Airpod Max",
  category: "gear",
  keywords: "headphones",
  imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633728954/devup/airpods_u4jmhg.png",
  description: "A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.",
  details: [
    "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music.", 
    "Transparency mode for hearing and interacting with the world around you.", 
    "Twenty hours of listening, movie watching, or talk time with Active Noise Cancellation and spatial audio enabled.", 
    "Magical experience with effortless setup, on-head detection, and seamless switching between devices."
  ],
  price: "499.95",
  productURL: "https://www.apple.com/airpods-max/"
},
{
  name: "MacBook Air 13' M1",
  category: "gear",
  keywords: "laptop",
  imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633729056/devup/macbook-air-og-202011_sxzbg7.jpg",
  description: "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.",
  details: [
    "All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.", 
    "The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.", 
    "Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.", 
    "Fanless Design – Your MacBook Air stays cool and runs quietly even while tackling intense workloads."
  ],
  price: "999.00",
  productURL: "https://www.apple.com/macbook-air/"
},
{
  name: "EUREKA ERGONOMIC L Shaped Desk",
  category: "furniture",
  keywords: "desk, gaming",
  imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633728743/devup/Ldesk_zq6mom.jpg",
  description: "The Eureka L60 Gaming Desk is the perfect choice for your gaming command center. The L60 boasts a sleek 60 inch L-shaped carbon fiber textured desktop. The L-shaped gaming surface has plenty of space for your gaming monitors, gaming consoles, gaming keyboard, and any other gaming gear you may have.",
  details: [
    "The Eureka L60 Gaming Desk comes equipped with an integrated power strip storage box and two cable grommets, getting that tangled mess of cords under control.", 
    "Two pieces of desktop make your desk easier to assembly. All tools and detailed manual are included in the box, only 20 minutes needed."
  ],
  price: "289.99",
  productURL: "https://eurekaergonomic.com/l60l-b/"
},

]

await Product.insertMany(products)
console.log('Created users & products!')

// close database connection. done.
db.close()
}

insertData()