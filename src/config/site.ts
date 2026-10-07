export const SITE = {
  name: "VELoop Pixel",
  tagline: "Turn your restaurant into a digital experience.",
  whatsappNumber: "919999999999",
  whatsappMessage:
    "Hi VELoop Pixel, I want to discuss a digital solution for my business.",
  email: "hello@velooppixel.com",
  social: { instagram: "#", linkedin: "#", facebook: "#", youtube: "#" },
  seo: {
    title: "VELoop Pixel — Digital Experiences for Restaurants & Businesses",
    description:
      "Digital menus, QR experiences, websites and customer engagement systems for modern restaurants.",
  },
};
export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
