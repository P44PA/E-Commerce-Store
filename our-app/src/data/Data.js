import { IoStar } from "react-icons/io5";

const today = new Date();
const today_date = today.getDate();
const month = today.getMonth();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const fulltag = `${today_date}  ${monthNames[month]}`;

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
    name: "Mens",
  },
  {
    img: "../images/WOMEN.jpg",
    name: "Womens",
  },
  {
    img: "../images/ACCESSORIES.jpg",
    name: "Womens",
  },
];

export const home = [
  {
    id: 1,
    img: "../images/pink1.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Elegant Pink Dress",
    short_description: "Beautiful pink dress for special occasions.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Feel elegant and glamorous in this beautiful pink dress. Perfect for weddings, parties, or any special occasion.",
  },
  {
    id: 2,
    img: "../images/top_jeans_side.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Kids",
    title: "Stylish Kids Top and Jeans Set",
    short_description: "Trendy top and jeans set for kids.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Keep your little ones stylish with this trendy top and jeans set. Perfect for casual outings and playdates.",
  },
  {
    id: 3,
    img: "../images/white_back.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "White Button-Up Blouse",
    short_description: "Classic white blouse for a sophisticated look.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "59.99",
    description:
      "Achieve a timeless and sophisticated look with this classic white button-up blouse. Made from high-quality fabric for maximum comfort.",
  },
];

export const feateures = [
  {
    id: 1,
    img: "../images/pink1.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Elegant Pink Dress",
    short_description: "Beautiful pink dress for special occasions.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Feel elegant and glamorous in this beautiful pink dress. Perfect for weddings, parties, or any special occasion.",
  },
  {
    id: 2,
    img: "../images/top_jeans_side.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Kids",
    title: "Stylish Kids Top and Jeans Set",
    short_description: "Trendy top and jeans set for kids.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "129.00",
    description:
      "Keep your little ones stylish with this trendy top and jeans set. Perfect for casual outings and playdates.",
  },
  {
    id: 3,
    img: "../images/white_back.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "White Button-Up Blouse",
    short_description: "Classic white blouse for a sophisticated look.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "59.99",
    description:
      "Achieve a timeless and sophisticated look with this classic white button-up blouse. Made from high-quality fabric for maximum comfort.",
  },
  {
    id: 4,
    img: "../images/white_face.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "White Off-Shoulder Top",
    short_description: "Chic off-shoulder top for a trendy look.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "39.99",
    description:
      "Stay on-trend with this chic white off-shoulder top. Perfect for a casual day out or a fun night with friends.",
  },
  {
    id: 5,
    img: "../images/top_jeans_side.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Distressed Denim Jeans",
    short_description: "Stylish distressed denim jeans for a rugged look.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "79.99",
    description:
      "Add a touch of edge to your wardrobe with these stylish distressed denim jeans. Pair them with your favorite top for a rugged yet fashionable look.",
  },
  {
    id: 6,
    img: "../images/light_black_face.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Lightweight Black Cardigan",
    short_description: "Versatile black cardigan for layering.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "49.99",
    description:
      "Stay cozy and stylish with this lightweight black cardigan. Perfect for layering over your favorite outfits for added warmth and style.",
  },

  {
    id: 7,
    img: "../images/red.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Red Floral Maxi Dress",
    short_description: "Stunning red floral maxi dress for a romantic look.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "89.99",
    description:
      "Make a statement with this stunning red floral maxi dress. Perfect for romantic dinners, weddings, or any special occasion where you want to stand out.",
  },
  {
    id: 8,
    img: "../images/black_face.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Black Leather Jacket",
    short_description: "Edgy black leather jacket for a bold style.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "199.99",
    description:
      "Channel your inner rockstar with this edgy black leather jacket. Made from high-quality leather for durability and style, perfect for adding a bold touch to any outfit.",
  },
  {
    id: 9,
    img: "../images/black_side.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Womens",
    title: "Black Ankle Boots",
    short_description: "Classic black ankle boots for everyday wear.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "79.99",
    description:
      "Complete your look with these classic black ankle boots. Versatile and stylish, they pair perfectly with jeans, dresses, and everything in between.",
  },
  {
    id: 10,
    img: "../images/whiteMan.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "White Linen Shirt",
    short_description: "Cool and comfortable white linen shirt for summer.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "59.99",
    description:
      "Stay cool and stylish during the warmer months with this white linen shirt. Made from breathable fabric, it's perfect for casual outings and beach days.",
  },
  {
    id: 11,
    img: "../images/stylishMan.webp",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Stylish Plaid Blazer",
    short_description:
      "Sharp and sophisticated plaid blazer for a polished look.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "149.99",
    description:
      "Elevate your style with this sharp and sophisticated plaid blazer. Perfect for formal events, work meetings, or adding a touch of polish to any outfit.",
  },
  {
    id: 12,
    img: "../images/democracyMan.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Democracy Graphic Tee",
    short_description: "Cool and casual graphic tee for everyday wear.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "29.99",
    description:
      "Express yourself with this cool and casual graphic tee. Made from soft and comfortable fabric, it's perfect for everyday wear and expressing your unique style.",
  },
  {
    id: 13,
    img: "../images/asianMan.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Asian-Inspired Kimono",
    short_description: "Stylish kimono with Asian-inspired design.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "99.99",
    description:
      "Add a touch of elegance to your wardrobe with this stylish kimono. Featuring an Asian-inspired design, it's perfect for adding a unique flair to any outfit.",
  },
  {
    id: 14,
    img: "../images/mature.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Classic Wool Peacoat",
    short_description: "Timeless wool peacoat for a refined look.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "249.99",
    description:
      "Stay warm and stylish with this timeless wool peacoat. Crafted from high-quality wool, it's perfect for adding a refined touch to your winter wardrobe.",
  },
  {
    id: 15,
    img: "../images/handsome.jpg",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Handsome Leather Briefcase",
    short_description: "Sophisticated leather briefcase for work or travel.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "199.99",
    description:
      "Stay organized and stylish with this handsome leather briefcase. Perfect for work or travel, it features multiple compartments and a classic design.",
  },
  {
    id: 16,
    img: "../images/idk.webp",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Casual Denim Jacket",
    short_description: "Relaxed denim jacket for a laid-back vibe.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "79.99",
    description:
      "Achieve a cool and casual look with this relaxed denim jacket. Perfect for layering over your favorite t-shirts and hoodies for a laid-back vibe.",
  },
  {
    id: 17,
    img: "../images/idk2.webp",
    tag: "new",
    btn: "Select Options",
    category: "Mens",
    title: "Sporty Hooded Sweatshirt",
    short_description: "Comfortable hooded sweatshirt for an active lifestyle.",
    rating: Array(5).fill({ icon: <IoStar /> }),
    price: "49.99",
    description:
      "Stay comfortable and stylish during workouts or casual outings with this sporty hooded sweatshirt. Made from soft and breathable fabric for maximum comfort.",
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
