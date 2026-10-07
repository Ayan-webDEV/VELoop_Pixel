export type Product = {
  id: string;
  name: string;
  purpose: string;
  where: string;
  digital: string;
};
export const PRODUCTS: Product[] = [
  {
    id: "double-stand",
    name: "Double-sided QR Table Stand",
    purpose: "Turn every table into a digital entry point.",
    where: "Dining tables",
    digital: "Digital menu, offers, call waiter, rewards",
  },
  {
    id: "counter-display",
    name: "Counter Display",
    purpose: "Invite customers to scan while they wait.",
    where: "Billing and entry counters",
    digital: "Menu, online order, offers, reviews",
  },
  {
    id: "entrance-board",
    name: "Entrance QR Board",
    purpose: "Greet customers with one clear digital action.",
    where: "Entrance / reception",
    digital: "Menu, timings, location, website",
  },
  {
    id: "pvc-panel",
    name: "PVC Panel",
    purpose: "Durable branded signage for high-traffic areas.",
    where: "Walls, glass, corridors",
    digital: "Menu, website, social links",
  },
  {
    id: "table-tent",
    name: "Table Tent",
    purpose: "Classic tabletop promotion upgraded with QR.",
    where: "Tables",
    digital: "Menu, offers, rewards",
  },
  {
    id: "takeaway-sticker",
    name: "Takeaway QR Sticker",
    purpose: "Keep the next order one scan away.",
    where: "Parcel bags and boxes",
    digital: "Reorder, loyalty, offers",
  },
  {
    id: "parcel-insert",
    name: "Parcel Insert Card",
    purpose: "A small card designed for repeat orders.",
    where: "Inside parcel bags",
    digital: "Reorder, rewards, feedback",
  },
  {
    id: "reorder-card",
    name: "Reorder Card",
    purpose: "Turn a good meal into a repeat habit.",
    where: "Along with bills",
    digital: "Reorder, offers",
  },
  {
    id: "offer-card",
    name: "Offer Card",
    purpose: "Promote live offers without reprinting everything.",
    where: "Counter, tables",
    digital: "Live offers",
  },
  {
    id: "loyalty-card",
    name: "Loyalty Card",
    purpose: "Give regulars a reason to return.",
    where: "Counter",
    digital: "Points, members-only offers",
  },
  {
    id: "promo-display",
    name: "Promotional Display",
    purpose: "Feature the items you want customers to notice.",
    where: "Counter, wall",
    digital: "Featured items, offers",
  },
];
