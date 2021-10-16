import db from '../db/connection.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'
import Post from '../models/post.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'admin',
    email: 'test@gmail.com',
    password_digest: await bcrypt.hash('admin12345', 11),
    products: [],
    wishlist: [],
    roles: 'admin',
  })
  await user1.save()

  const user2 = new User({
    username: 'tester',
    email: 'tester@gmail.com',
    password_digest: await bcrypt.hash('tester1', 11),
    products: [],
    wishlist: [],
    roles: 'basic',
  })
  await user2.save()

  const user3 = new User({
    username: 'test3',
    email: 'test2@gmail.com',
    password_digest: await bcrypt.hash('test3', 11),
    products: [],
    wishlist: [],
    roles: 'basic',
  })
  await user2.save()

  const user4 = new User({
    username: 'bruno',
    email: 'bruno@gmail.com',
    password_digest: await bcrypt.hash('bruno', 11),
    products: [],
    wishlist: [],
    roles: 'basic',
  })
  await user2.save()

  const products = [
    {
      name: "Steel Series Apex Pro Keyboard",
      category: "Gear",
      keywords: "Keyboard",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633727697/devup/steelseriesapexpro_rph3hn.jpg",
      description:
        "Upgrade your accuracy with this SteelSeries Apex Pro mechanical gaming keyboard. Advanced OmniPoint switches make inputs feel fast and fluid, and the adjustable design lets you change the actuation distance to suit your play style. This SteelSeries Apex Pro mechanical gaming keyboard has a sturdy aluminum alloy frame that stands up to heavy use.",
      details:
        "First-of-its kind adjustable mechanical switches for customizable per-key sensitivity/nFaster response, 5x faster actuation, and 2x durability/nOLED Smart Display delivers information straight from games and apps/nSeries 5000 Aircraft grade aluminum frame/Detachable soft touch magnetic wrist rest",
      price: "199.99",
      productURL: "https://steelseries.com/gaming-keyboards/apex-pro",
      reviews: [
        {
          userId: user1,
          author: 'SH',
          rating: 4,
          content:
            'The SteelSeries Apex Pro is a beautifully RGBed keyboard with an amazing level of customization, including per-key actuation that will change how you game. But tactile typing fans will want more from the linear switches.',
        },
        {
          userId: user1,
          author: 'theTechie',
          rating: 5,
          content:
            'The switches feel nice, and there are a few features you won’t find on a some other TKL keyboards like the OLED display (mostly a gimmick but cool nonetheless), usb passthrough, cable routing, and dial. The magnetic wrist rest isn’t plush, more like a flat rubber surface to prop up your hand. That isn’t to say it’s not comfortable or soft, but it is a pain to clean as it is a dust magnet. They keycaps feel cheap and are my main gripe for a premium keyboard, however I Luckily had higher quality shine-through keycaps from previously. Overall I am satisfied with the keyboard and would recommend to anyone thinking of purchasing.',
        },
      ],
    },
    {
      name: "Mount-It! Single Monitor Arm Desk Mount ",
      category: "Accessories",
      keywords: "Desk",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1634155941/devup/mountit-monitor-arm_sh5bbf_adobespark_xy5lz9.png",
      description: "Free up space on your desktop with this Mount-It! full-motion single monitor desk mount. The full-motion arms tilt, swivel and adjust in height for a customized setup, while the cable management system tucks all connecting cables away, increasing neatness. This Mount-It! full-motion single monitor desk mount has a clamp at the base for easy, secure installation on the edge of a desk.",
      details:
        "Gas spring monitor arm is heavy duty, counterbalanced and makes for effortless adjustments and comes with integrated, hide-away cable management./nAircraft grade aluminum alloy construction will stand the test of time./nMonitor arm desk mount quickly mounts to desks and comes with all mounting hardware, tools, and instructions necessary for assembly./nQuick-release detachable VESA plate mounts to back of monitor first, then slides onto arm in seconds!",
      price: "74.99",
      productURL: "https://mount-it.com/products/mount-it-gas-spring-single-monitor-desk-mount-mi-1771?variant=31453302096010&gclid=CjwKCAjw2P-KBhByEiwADBYWCmPvEGZMQQpIioNqTAostnHKObzkcknr6_TGqWSkV_oqvtW3sRG46BoC0fkQAvD_BwE",
    },
    {
      name: "UXL Desk Mat",
      category: "Accessories",
      keywords: "Desk",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633727267/devup/deskmat_q7tovg.jpg",
      description: "We were tired of the low quality desk mats out there so we designed and made our own. Made from vegan leather, it's been designed to be clean and minimal. It will protect your desk whilst also making it easier to use your mouse.",
      details: "80cm x 45cm /nUsed by employees from Apple, Amazon, GoPro and many more./nDesigned to be super minimal and clean, our desk mats can add some much needed texture and organisation to your desk./nMade from vegan leather which is specially designed to be durable and long-lasting./nIt will also protect your desk from any spills, scratches or scrapes.",
      price: "79.00",
      productURL: "https://ulxstore.com/products/black-leather-desk-mat",
    },
    {
      name: "Airpod Max",
      category: "Gear",
      keywords: "Audio",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633728954/devup/airpods_u4jmhg.png",
      description: "A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.",
      details: "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music./nTransparency mode for hearing and interacting with the world around you./nTwenty hours of listening, movie watching, or talk time with Active Noise Cancellation and spatial audio enabled./nMagical experience with effortless setup, on-head detection, and seamless switching between devices.",
      price: "499.95",
      productURL: "https://www.apple.com/airpods-max/",
      reviews: [
        {
          userId: user1,
          author: 'Gary',
          rating: 5,
          content:
            'Using these headphones with Apple devices is pretty much as expected, seamless. I will say that you will need to ensure that you devices are updated to the latest operating system in order to fully enjoy all of the features. Battery life so far is very good! The smart case helps maintain battery life when not in use. From regular use I can go about three days before I need to charge them again. Now that is not travel days. If you travel a lot you may have to charge them more often. Everyones use case is different.',
        },
      ]
    },
    {
      name: "MacBook Air 13' M1",
      category: "Gear",
      keywords: "Laptop",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633729056/devup/macbook-air-og-202011_sxzbg7.jpg",
      description: "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.",
      details: "All-Day Battery Life – Go longer than ever with up to 18 hours of battery life./nThe Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power./nSuperfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily./nFanless Design – Your MacBook Air stays cool and runs quietly even while tackling intense workloads.",
      price: "999.00",
      productURL: "https://www.apple.com/macbook-air/",

    },
    {
      name: "EUREKA ERGONOMIC L Shaped Desk",
      category: "Furniture",
      keywords: "Desk",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1634152303/devup/Ldesk_adobespark_bnk0kk.png",
      description: "The Eureka L60 Gaming Desk is the perfect choice for your gaming command center. The L60 boasts a sleek 60 inch L-shaped carbon fiber textured desktop. The L-shaped gaming surface has plenty of space for your gaming monitors, gaming consoles, gaming keyboard, and any other gaming gear you may have.",
      details: "The Eureka L60 Gaming Desk comes equipped with an integrated power strip storage box and two cable grommets, getting that tangled mess of cords under control./nTwo pieces of desktop make your desk easier to assembly. All tools and detailed manual are included in the box, only 20 minutes needed.",
      price: "289.99",
      productURL: "https://eurekaergonomic.com/l60l-b/"
    },
    {
      name: "Nouhaus Ergo3D Ergonomic Office Chair",
      category: "Furniture",
      keywords: "Chair",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1634152230/devup/nouhauchair_adobespark_murcw3.png",
      description: "For a chair that goes beyond ergonomics, one that conforms to your body and your life, take a seat with the Ergo3D. The 4D-Orbital Armrests glide and tilt to a perfect and precise position, while our unique ‘Just-For-Me’ Lumbar Support System adjusts and hugs your back into perfect alignment to reduce compression and pain. The Ergo3D is so comfy, you’ll forget you’re even working.he Eureka L60 Gaming Desk is the perfect choice for your gaming command center. The L60 boasts a sleek 60 inch L-shaped carbon fiber textured desktop. The L-shaped gaming surface has plenty of space for your gaming monitors, gaming consoles, gaming keyboard, and any other gaming gear you may have.",
      details: "The E4D-Orbital Armrests: Glide forwards, back, sideways, up and down, and pivots left and right./n'Just-For-Me' Lumbar Support: Adjusts as you shift position for optimized back support./nBreathable Soft HD ElastoMesh: Optimal airflow to reduce sweating and sticking./n2D-Adjust Headrest: Adjusts up and down with ErgoTilt for ideal neck placement/n135 Degree Super Lounge Recline With Recline Lock",
      price: "309.99",
      productURL: "https://www.nouhaus.com/collections/sale/products/ergo3d?gclid=Cj0KCQjwnoqLBhD4ARIsAL5JedKv73MEDw_Tk_hIXhZ613Lal0KDgOBDYGt9YHjYEghzkeNiYcUrpUAaApoLEALw_wcB"
    },
    {
      name: 'Apex Elite Standing Desk 71"',
      category: "Furniture",
      keywords: "Desk",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1634152230/devup/apexelitedesk_adobespark_onzl5o.png",
      description: "Debuted in 2015 and for six years running, the Elite Series has been the favorite of reviewers and users. Many improvements have been made over the years. The desk has become more stable, quieter. We’ve updated packaging to reduce shipping damages to a minimum.",
      details: "One-piece solid 1” thick top. At 71” wide and 33” deep (27.6” at mid-section), it can hold up to three screens and is one of the largest standing desks in the market./nWith a fast speed of 1.5” per second, the desk can move anywhere between 29” to 49” with a push of a button. The load capacity is 235 lbs./nOriginally sold separately, we are now including a full-size cable management tray. Measuring 35.5” x 5.5”, the tray is large enough to hide all cables that comes with the desk and has space for one 12-outlet power strip and a few power adapters.",
      price: "679.99",
      productURL: "https://www.apexdesk.com/collections/elite-71-series/products/elite-series-71-electric-height-adjustable-standing-desk"
    },
    {
      name: "minder Laptop Tower Stand",
      category: "Accessories",
      keywords: "Stand",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1634152232/devup/laptopstand_adobespark_wwwuhc.png",
      description: "A laptop stand will enable you to transform your desk to an effective workspace so you can work comfortably, whether you’re sitting, standing or changing positions frequently.",
      details: "This vertical laptop stand positions your laptop at eye level while sitting or standing, which improves your posture and saves you from back and neck pains./nWork in your most comfortable position for a boost of productivity and comfort. You can modify and set the height of this adjustable laptop stand according to your preferences and needs./nIt’s built for stability so height adjustments do not compromise durability. This stand is built with strong materials and a sturdy structure so your laptop and other devices remain safe while you’re working or studying./nSetting up a workstation is now easier than ever, even when you’re on the go! This laptop holder is detachable, collapses and easily fits into a backpack or messenger bag, so you can bring it anywhere and everywhere with ease.",
      price: "64.99",
      productURL: "https://www.obvus.me/products/laptoptower"
    },
    {
      name: "Taotronics LED Desk Lap",
      category: "Accessories",
      keywords: "Lighting",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1634152631/devup/taotronicslamp_tq2zzu_adobespark_goar5v.png",
      description: "13 Eye-caring table lamp with USB Charging port.",
      details: "Wonderfully Gentle on the Eyes: Shines a flicker-free light that brightens your space without harming your eyes; ideal for reading, working and studying./nEndless Lighting Possibilities: Create the perfect ambience with our LED desk lamp’s unique combination of 5 color modes & 7 brightness levels./nFunctional USB charging port: Don’t sacrifice charging for lighting - built-in USB port keeps your phone at a full charge & within reach./nAdjustable Design: Freedom to cast the perfect spotlight, tilt the head up 135 degrees & swivel 90 degrees; the base tilts down to 150 degrees & swivels 45 degrees./nEnergy Efficient LED: Featuring outstanding environmental performance, switch your traditional desk lamp to ours to help reduce the electricity bill by up to 75%.",
      price: "39.99",
      productURL: "https://www.taotronics.com/products/tt-dl13-led-desk-lamp"
    },
    {
      name: "Autonomous ErgoChair Pro",
      category: "Furniture",
      keywords: "Chair",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633883540/devup/ergochairpro_rtpmgn.png",
      description: "Every element you see and feel is engineered to increase mobility and eliminate pain. Because everything starts with well-being.",
      details: "Featuring adjustable tension and 22° of recline. Lockable across 5 key positions, each designed to keep your spine stable and support your lumbar area. And it’s wrapped in ultra-breathable woven mesh, for gentle posture-perfecting resistance./nBack and seat move in tandem at an ergonomic 2:1 ratio, so you can recline and stretch without putting pressure on your legs, thighs, and lower back. End your day with as much energy as when you started./nThe flexible lumbar cushion protects the natural curvature of your spine and eases both pain and stiffness. Instead of dictating the inward curve, it responds to the unique shape of your body to provide tailored support./nBoth height and angle are adjustable, so you can stop straining your neck. Explore 45° of flexibility to find ideal support – whether you’re writing at your desk, looking at a monitor, or leaning back to relax./n10° of adjustable tilt allows you to properly align your sacrum and ensure even muscle development in your back, side, and core. And it keeps your pelvis in a neutral position to prevent future postural issues.",
      price: "499.00",
      productURL: "https://www.autonomous.ai/office-chairs/ergonomic-chair?option20=53&purchase_method=1"
    },
    {
      name: "SAMSON Pro USB Microphone",
      category: "Gear",
      keywords: "Audio",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1634150224/devup/G-Track-Pro-HO-display_adobespark_ejq2ua.png",
      description: 'The G-Track Pro is a USB microphone designed to provide the high audio quality to podcasters, streamers, singer/songwriters and content creators. The dual 1" condenser capsules capture all the detail and nuance of your voice elevating the quality of your recording, live stream or broadcast. The G-Track Pro combines 24-bit digital recording resolution with the flexibility of three mic pickup pattens and a 1/4" audio input for professional sounding recordings, no matter the application.',
      details: "All-in-one professional USB microphone with audio interface/nDual 1 inch condenser capsules/nCardioid, bidirectional and omnidirectional pickup patterns/n24-bit resolution/n1/4 inch instrument input for connecting guitars or line level devices/n1/8 inch stereo headphone output for zero-latency monitoring",
      price: "129.00",
      productURL: "http://www.samsontech.com/samson/products/microphones/usb-microphones/gtrackpro/"
    },
    {
      name: 'Sceptre Curved 30" LED Monitor',
      category: "Gear",
      keywords: "Monitor",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1633956956/devup/sceptremonitor_pjcblf.jpg",
      description: "Sceptre's 21:9 UltraWide curved monitor immerses the attention of a larger audience with a 30 inch screen that accurately resembles the contours of the human eye.",
      details: "30 inch 21: 9 curved monitor 2560 x 1080P resolution/nDp up to 85Hz refresh rate/ HDMI up to 85Hz refresh rate/nAdaptiveSync/nFPS and RTS are Sceptre custom set Display settings/nBlue light shift reduce your MONITORS Blue light to protect you from eye fatigue/nEdgeless design",
      price: "399.99",
      productURL: "https://www.sceptre.com/Monitors/UltraWide/C305B-200UN-30-Curved-Monitor-product1134category12category95.html"
    },
    {
      name: "LG Gram 17",
      category: "Gear",
      keywords: "Laptop",
      imgURL: "https://res.cloudinary.com/devupapp/image/upload/v1634127184/devup/lg-gram-17-2021-hero_kjygi9.jpg",
      description: "Meet an ultra-lightweight laptop with a 16:10 professional display, a new design, and Intel® Evo™ platform.",
      details: "16GB LPDDR4X 4266mhz RAM delivers a high level of performance for memory-intensive content creation, designing, editing, and multitasking/nImprove productivity with 2TB PCIe M.2 NVMe SSD for dependable storage accessible in a flash/nConnect with Confidence: Two USB-C ports with Thunderbolt 4 support, two USB-A 3.2 ports, a full-size HDMI port, a microSD card reader, and a 3.5mm audio jack/nGet more done on the go with up to 19.5 hours battery life with a single charge (Disclaimer: battery life will vary from specifications depending on model",
      price: "1,695.00",
      productURL: "https://www.lg.com/us/laptops?gclid=Cj0KCQjwnoqLBhD4ARIsAL5JedJDHWljCS0tnhoRr63DExowHaZeVK_CkJM8WuoYu-785xl2gTH_B88aAijeEALw_wcB&gclsrc=aw.ds"
    },
  ]

  await Product.insertMany(products)
  console.log('Created users & products!')

  const user1products = await Product.find({ userId: user1 })
  user1.products = user1products
  await user1.save()

  const posts = [
    {
      title: "Why Dev Up",
      name: "Benjamin Jean",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      hashtags: "#Gamer #Duh",
    },
    {
      title: "Why Dev Up",
      name: "Benjamin Jean2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      hashtags: "#Gamer #Duh",
    },
    {
      title: "Why Dev Up",
      name: "Benjamin Jean3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      hashtags: "#Gamer #Duh",
    },
    {
      title: "Why Dev Up",
      name: "Benjamin Jean4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      hashtags: "#Gamer #Duh",
    },
  ]

  await Post.insertMany(posts)
  console.log('Created Posts')


  // close database connection. done.
  db.close()
}

insertData()