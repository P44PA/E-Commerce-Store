import { IoStar } from "react-icons/io5";

const today = new Date
const today_date = today.getDate()
const month = today.getMonth()
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const fulltag = `${today_date}  ${monthNames[month]}`

export const navbar = [
  {
    id: 1,
    path: "/",
    nav: "Home",
  },
  {
    id: 2,
    path: "/about",
    nav: "About",
  },
  {
    id: 3,
    path: "/shop",
    nav: "Shop",
  },
  {
    id: 4,
    path: "/contact",
    nav: "Contact",
  },
  {
    id: 5,
    path: "/favorites",
    nav: "Favorites",
  },
];

export const banners = [
  {
    banner: "../images/slider3.jpg",
  },
  {
    banner: "../images/slider2.jpg",
  },
  {
    banner: "../images/slider1.jpg",
  },
];

export const bannar_down = [
  {
    img: "../images/MEN.jpg",
    name: "MEN",
  },
  {
    img: "../images/WOMEN.jpg",
    name: "WOMEN",
  },
  {
    img: "../images/ACCESSORIES.jpg",
    name: "ACCESSORIES",
  },
];

export const feateures = [
  {
    id: 1,
    img: "../images/pink1.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Shop",
    short_description: "Goca 1",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 2,
    img: "../images/top_jeans_side.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Kids",
    title: "Shop",
    short_description: "Goca 2",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 3,
    img: "../images/white_back.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Shop",
    short_description: "Goca 3",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 4,
    img: "../images/white_face.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Shop",
    short_description: "Goca 4",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 5,
    img: "../images/top_jeans_side.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Shop",
    short_description: "Goca 5",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 6,
    img: "../images/light_black_face.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Shop",
    short_description: "Goca 6",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },

  {
    id: 7,
    img: "../images/red.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Kurti",
    short_description: "Goca 7",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 8,
    img: "../images/black_face.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Kurti",
    short_description: "Goca 8",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 9,
    img: "../images/black_side.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Kurti",
    short_description: "Goca 9",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 10,
    img: "../images/whiteMan.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Kurti",
    short_description: "Cuni 1",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 11,
    img: "../images/stylishMan.webp",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Kurti",
    short_description: "Cuni 2",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 12,
    img: "../images/democracyMan.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Kurti",
    short_description: "Cuni 3",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 13,
    img: "../images/asianMan.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Kurti",
    short_description: "Cuni 6",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 14,
    img: "../images/mature.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Kurti",
    short_description: "Cuni 7",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 15,
    img: "../images/handsome.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Kurti",
    short_description: "Cuni 7",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 16,
    img: "../images/idk.webp",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Kurti",
    short_description: "Cuni 7",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
  {
    id: 17,
    img: "../images/idk2.webp",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Kurti",
    short_description: "Cuni 7",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elitLorem ipsum dolor sit amet, consectetur adipiscing elit  euismod er  elit",
  },
];

export const reviews = [
  {
    title: "Customer Review",
    description:
      "High-quality clothing at reasonable prices. I love the variety and the fast shipping. Highly recommend!",
    customer_img: "../images/testi1.jpg",
    customer_name: "Emily Thompson",
    position: "Graphics Design",
  },

  {
    title: "Customer Review",
    description:
      "Amazing selection of trendy and stylish clothes. The website is easy to navigate, and the customer service is top-notch.",
    customer_img: "../images/testi2.jpg",
    customer_name: "Isabella Brown",
    position: "Lawyer",
  },

  {
    title: "Customer Review",
    description:
      "A fantastic online shopping experience. The clothes are exactly as pictured, and the fit is perfect. Great return policy too.",
    customer_img: "../images/testi3.jpg",
    customer_name: "Ethan Davis",
    position: "Architect",
  },
];

export const blogs = [
  {
    id: 1,
    img: "../images/10-home_default.jpg",
    tag: fulltag,
    title: "Shop",
    short_description: "Latest Blogs",
    read_more: "Read More",
  },
  {
    id: 2,
    img: "../images/11-home_default.jpg",
    tag: fulltag,
    title: "Shop",
    short_description: "Latest Blogs",
    read_more: "Read More",
  },
  {
    id: 3,
    img: "../images/12-home_default.jpg",
    tag: fulltag,
    title: "Shop",
    short_description: "Latest Blogs",
    read_more: "Read More",
  },
  {
    id: 4,
    img: "../images/13-home_default.jpg",
    tag: fulltag,
    title: "Shop",
    short_description: "Latest Blogs",
    read_more: "Read More",
  },
  {
    id: 5,
    img: "../images/kurti.jpg",
    tag: fulltag,
    title: "Shop",
    short_description: "Latest Blogs",
    read_more: "Read More",
  },
  {
    id: 6,
    img: "../images/14-home_default.jpg",
    tag: fulltag,
    title: "Shop",
    short_description: "Latest Blogs",
    read_more: "Read More",
  },
];

export const footer = [
  {
    id: 2,
    header: " ",
    content1: "Customer Service",
    content2: "Have questions or need assistance?",
    content3: "Reach out to our friendly customer service team here.",
    content4:
      "Shipping & Returns: Learn about our fast shipping options and easy return policy here.",
    content5: "FAQ: Find answers to common questions here.",
  },
  {
    id: 3,
    header: " ",
    content1: "Stay Connected",
    content2: "Newsletter: Sign up for our newsletter ",
    content3: "to get the latest updates on new arrivals,",
    content4: "exclusive offers, and fashion tips.",
  },
  {
    id: 4,
    header: " ",
    content1: "Privacy Policy",
    content2: "Understand our terms and conditions here.",
    content3: "Your privacy is important to us. Read our privacy policy ",
    content4: "Understand our terms and conditions here.",
  },
];
