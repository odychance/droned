import drone1 from '/src/assets/images/drones/DJI-MINI/main-DJI.png';
import drone1_2 from "/src/assets/images/drones/DJI-MINI/DJI-op1.webp";
import drone1_3 from "/src/assets/images/drones/DJI-MINI/DJI-op2.webp";
import drone1_4 from "/src/assets/images/drones/DJI-MINI/DJI-op3.webp";
import drone1_5 from "/src/assets/images/drones/DJI-MINI/DJI-op4.png";

import drone2 from "/src/assets/images/drones/MAVIC-AIR.png";
import drone3 from "/src/assets/images/drones/K101-MAX.webp";
import drone4 from "/src/assets/images/drones/MAVIC-MINI-4-PRO.png";
import drone5 from "/src/assets/images/drones/MAVIC-3-PRO.png";
import drone6 from "/src/assets/images/drones/VIMO-4G.png";
import drone7 from "/src/assets/images/drones/DJI-AGRAS-T50.png";
import drone8 from "/src/assets/images/drones/DJI-AGRAS-T40.webp";

import man1 from "/src/assets/images/profileIcons/man1.png";
import man2 from "/src/assets/images/profileIcons/man2.png";
import man3 from "/src/assets/images/profileIcons/man3.png";
import man4 from "/src/assets/images/profileIcons/man4.png";
import man5 from "/src/assets/images/profileIcons/man5.png";
import man6 from "/src/assets/images/profileIcons/man6.png";
import woman1 from "/src/assets/images/profileIcons/woman1.png";
import woman2 from "/src/assets/images/profileIcons/woman2.png";
import woman3 from "/src/assets/images/profileIcons/woman3.png";
import woman4 from "/src/assets/images/profileIcons/woman4.png";
import woman5 from "/src/assets/images/profileIcons/woman5.png";
import woman6 from "/src/assets/images/profileIcons/woman6.png";

export const MAIN_DRONE = {
  name: "DJI MINI 2 SE 4K",
  launched: "Nov 2024",
  description: "Conquer the heights with the DJI MINI 2 SE 4K, which combines a high-definition camera with a streamlined design and a range of 1.5 km.",
  advantage: "Easy to carry, high technology and long battery life.",
  price: 349.99,
  rated: 5,
  stock: 0,
  imageUrl: drone1,
  mainImagesAlternative: {
    image1: drone1_2,
    image2: drone1_3,
    image3: drone1_4,
    image4: drone1_5
  }
}

export const DRONE_INVENTORY = [
  {
    name: "MAVIC AIR",
    launched: "Oct 2024",
    description: "Lightweight and powerful, MAVIC AIR features a 4K camera and automatic flight modes, making it ideal for capturing unique moments.",
    advantage: "Equipped with 360° obstacle sensors, perfect for flying in dense environments like forests or ruined buildings.",
    price: 329.99,
    rated: 4.8,
    stock: 7,
    imageUrl: drone2,

  },
  {
    name: "K101 MAX",
    launched: "Jul 2024",
    description: "The K101 MAX offers stable performance with intelligent features like auto return and professional-grade HD camera.",
    advantage: "48MP camera with 4K stabilization to capture ultra-sharp images and videos, ideal for content creators.",
    price: 289.99,
    rated: 4.4,
    stock: 10,
    imageUrl: drone3
  },
  {
    name: "MAVIC MINI 4 PRO",
    launched: "May 2024",
    description: "Explore new horizons with the MINI 4 PRO, equipped with built-in GPS, HD camera and a rugged outdoor design.",
    advantage: "Top speed of 120 km/h, designed for racing competitions and fast maneuvers.",
    price: 249.99,
    rated: 4.5,
    stock: 8,
    imageUrl: drone4
  },
  {
    name: "MAVIC 3 PRO",
    launched: "Mar 2024",
    description: "The MAVIC 3 PRO combines portability and quality with a 1080p camera and simplified controls. Ideal for capturing quick moments on your adventures.",
    advantage: "Up to 5kg load capacity, perfect for package deliveries or transporting small tools.",
    price: 259.99,
    rated: 4.2,
    stock: 6,
    imageUrl: drone5
  },
  {
    name: "VIMO 4G",
    launched: "Jan 2024",
    description: "Lightweight and agile, the VIMO 4G offers solid performance with stabilization features and an HD camera. Perfect for outdoor recreational flights.",
    advantage: "Long-lasting battery allows for flights of up to 45 minutes continuously, ideal for extended explorations.",
    price: 209.99,
    rated: 4.3,
    stock: 9,
    imageUrl: drone6
  },
  {
    name: "DJI AGRAS T50",
    launched: "Dec 2023",
    description: "The DJI AGRAS T50 offers stable performance with intelligent features such as automatic return and a professional-grade HD camera.",
    advantage: "Waterproof and capable of operating at shallow depth, ideal for capturing underwater images or in rainy areas.",
    price: 199.99,
    rated: 3,
    stock: 10,
    imageUrl: drone7
  },
  {
    name: "DJI AGRAS T40",
    launched: "Oct 2023",
    description: "Easy to use and compact, the DJI AGRAS T40 is perfect for beginners, with an HD camera and basic flight modes. Ideal for your first steps into aerial exploration.",
    advantage: "Foldable size and ultra-light weight of 250g, perfect for travelers and easy to carry in a backpack.",
    price: 189.99,
    rated: 4,
    stock: 0,
    imageUrl: drone8
  }
]

export const REVIEW_PRODUCTS = [
  {
    name: "Michael Johnson",
    email: "michael.johnson92@gmail.com",
    date: "2025-02-05",
    rating: 5,
    product: "DJI MINI 2 SE 4K",
    comment: "Absolutely love this drone! The 4K camera captures stunning footage, and the 1.5 km range is impressive. Highly recommended!",
    icon: man1
  },
  {
    name: "Jessica Williams",
    email: "jessica.williams87@hotmail.com",
    date: "2025-02-06",
    rating: 4,
    product: "DJI MINI 2 SE 4K",
    comment: "Great drone, easy to carry and high-tech, but I wish the stock was available more often. Can’t wait to buy another one!",
    icon: woman1
  },
  {
    name: "David Smith",
    email: "david.smith75@gmail.com",
    date: "2025-02-07",
    rating: 4.8,
    product: "MAVIC AIR",
    comment: "The obstacle sensors work perfectly! Flying through tight spaces feels incredibly smooth. Worth every penny.",
    icon: man2
  },
  {
    name: "Emily Davis",
    email: "emily.davis64@hotmail.com",
    date: "2025-02-08",
    rating: 4.4,
    product: "K101 MAX",
    comment: "The stabilization on this drone is amazing. I use it for my photography projects, and the 48MP camera delivers outstanding quality!",
    icon: woman2
  },
  {
    name: "James Miller",
    email: "james.miller29@gmail.com",
    date: "2025-02-09",
    rating: 5,
    product: "DJI MINI 2 SE 4K",
    comment: "This drone exceeded my expectations! Super long battery life and incredible footage quality.",
    icon: man3
  },
  {
    name: "Ashley Brown",
    email: "ashley.brown81@hotmail.com",
    date: "2025-02-10",
    rating: 4.5,
    product: "MAVIC MINI 4 PRO",
    comment: "Super fast and stable! The 120 km/h top speed makes it feel like a racing drone. Love it!",
    icon: woman3
  },
  {
    name: "Daniel Wilson",
    email: "daniel.wilson57@gmail.com",
    date: "2025-02-11",
    rating: 4.2,
    product: "MAVIC 3 PRO",
    comment: "Love the portability of this drone. It’s so easy to control, and the 1080p camera is perfect for my trips.",
    icon: man4
  },
  {
    name: "Sophia Martinez",
    email: "sophia.martinez42@hotmail.com",
    date: "2025-02-12",
    rating: 4.3,
    product: "VIMO 4G",
    comment: "Battery lasts forever! I can explore for almost an hour without needing a recharge. Perfect for my outdoor adventures.",
    icon: woman4
  },
  {
    name: "Ryan Anderson",
    email: "ryan.anderson33@gmail.com",
    date: "2025-02-13",
    rating: 3,
    product: "DJI AGRAS T50",
    comment: "It’s okay for the price, but I expected better camera quality. Works fine in wet conditions, though.",
    icon: man5
  },
  {
    name: "Olivia Thomas",
    email: "olivia.thomas90@hotmail.com",
    date: "2025-02-14",
    rating: 4,
    product: "DJI AGRAS T40",
    comment: "I love how compact this drone is! Fits in my backpack easily. Great for travel photography.",
    icon: woman5
  },
  {
    name: "Matthew Taylor",
    email: "matthew.taylor88@gmail.com",
    date: "2025-02-15",
    rating: 4.8,
    product: "MAVIC AIR",
    comment: "This drone is a beast! The 360° obstacle avoidance system is flawless. Best purchase this year.",
    icon: man6
  },
  {
    name: "Ava Harris",
    email: "ava.harris73@hotmail.com",
    date: "2025-02-16",
    rating: 4.4,
    product: "K101 MAX",
    comment: "Super sharp images with the 48MP camera. The stabilization makes a huge difference in windy conditions!",
    icon: woman6
  },
  {
    name: "Ethan White",
    email: "ethan.white95@gmail.com",
    date: "2025-02-17",
    rating: 4.5,
    product: "MAVIC MINI 4 PRO",
    comment: "Handles fast maneuvers like a pro. If you love drone racing, this is the one to get!",
    icon: man2
  },
  {
    name: "Mia Martin",
    email: "mia.martin60@hotmail.com",
    date: "2025-02-18",
    rating: 4.2,
    product: "MAVIC 3 PRO",
    comment: "Super versatile drone! The ability to carry up to 5kg is a game-changer for delivery applications.",
    icon: woman3
  },
  {
    name: "Benjamin Thompson",
    email: "benjamin.thompson78@gmail.com",
    date: "2025-02-19",
    rating: 4.3,
    product: "VIMO 4G",
    comment: "Super durable and reliable. The long battery life allows me to explore longer than most drones.",
    icon: man4
  },
  {
    name: "Charlotte Moore",
    email: "charlotte.moore85@hotmail.com",
    date: "2025-02-20",
    rating: 3,
    product: "DJI AGRAS T50",
    comment: "Not bad, but the camera quality isn’t the best. Works great in rainy weather, though.",
    icon: woman5
  },
  {
    name: "Lucas Jackson",
    email: "lucas.jackson99@gmail.com",
    date: "2025-02-21",
    rating: 4,
    product: "DJI AGRAS T40",
    comment: "Lightweight and easy to carry. Perfect for beginners looking for a solid first drone.",
    icon: man6
  },
  {
    name: "Amelia Garcia",
    email: "amelia.garcia68@hotmail.com",
    date: "2025-02-22",
    rating: 5,
    product: "DJI MINI 2 SE 4K",
    comment: "The best drone I’ve ever owned! The camera and battery life make it unbeatable.",
    icon: woman1
  },
  {
    name: "Henry Robinson",
    email: "henry.robinson82@gmail.com",
    date: "2025-02-23",
    rating: 4.8,
    product: "MAVIC AIR",
    comment: "Absolutely fantastic! I use it for my real estate photography, and clients love the aerial shots.",
    icon: man2
  },
  {
    name: "Ella Clark",
    email: "ella.clark77@hotmail.com",
    date: "2025-02-24",
    rating: 4.5,
    product: "K101 MAX",
    comment: "Great drone for content creators. The 4K stabilization makes my videos look super professional.",
    icon: woman3
  }
];
