import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, label: "home", href: "#home" },
  { id: 2, label: "about", href: "#about" },
  { id: 3, label: "services", href: "#services" },
  { id: 4, label: "tours", href: "#tours" },
];

export const socialLinks = [
  { id: 1, icon: "fab fa-facebook", href: "https://www.twitter.com" },
  { id: 2, icon: "fab fa-twitter", href: "https://www.twitter.com" },
  { id: 3, icon: "fab fa-squarespace", href: "https://www.twitter.com" },
];

export const serviceData = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const toursData = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    duration: "6 days",
    price: 1200,
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    duration: "11 days",
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    duration: "8 days",
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    duration: "20 days",
    price: 3300,
  },
];
