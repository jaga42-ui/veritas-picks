export interface CategoryConfig {
  name: string;
  slug: string;
  description: string;
  iconName: string;
  heroImage: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
  };
  amazonAssociateId: string;
  categories: CategoryConfig[];
  mainNav: {
    title: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Veritas Picks",
  tagline: "Discover Beautiful Things You'll Actually Love",
  description:
    "A premium editorial lifestyle magazine & discovery platform featuring curated collections, Scandinavian minimalist inspiration, viral Amazon finds, and timeless aesthetic essentials.",
  url: "https://veritaspicks.com",
  author: {
    name: "Clara Vance",
    role: "Editor-in-Chief & Curatorial Director",
    bio: "Former Vogue fashion assistant and interior stylist with an obsession for Scandinavian minimalism, timeless capsule wardrobes, and discovering luxury-looking Amazon gems.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  amazonAssociateId: "veritaspicks-20",
  categories: [
    {
      name: "Women's Fashion",
      slug: "fashion",
      description:
        "Effortless chic, minimalist wardrobes, and luxury-looking Amazon fashion finds.",
      iconName: "Shirt",
      heroImage:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Beauty",
      slug: "beauty",
      description:
        "Viral skincare, cult-favorite makeup, and aesthetic vanity essentials.",
      iconName: "Sparkles",
      heroImage:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Jewelry",
      slug: "jewelry",
      description:
        "Timeless gold hoops, delicate layering necklaces, and everyday luxury pieces.",
      iconName: "Gem",
      heroImage:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Handbags",
      slug: "handbags",
      description:
        "Designer-inspired totes, structured leather shoulder bags, and sleek woven accessories.",
      iconName: "ShoppingBag",
      heroImage:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Shoes",
      slug: "shoes",
      description:
        "Classic loafers, minimalist block heels, and aesthetic everyday sneakers.",
      iconName: "Footprints",
      heroImage:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Home Decor",
      slug: "home-decor",
      description:
        "Scandinavian pottery, warm linen accents, and sculptural minimalist lighting.",
      iconName: "Home",
      heroImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Bedroom Inspiration",
      slug: "bedroom-inspiration",
      description:
        "Cloud-like duvet covers, warm ambient lamps, and cozy bedside staples.",
      iconName: "Bed",
      heroImage:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Organization",
      slug: "organization",
      description:
        "Aesthetic pantry organizers, acrylic boxes, and serene closet systems.",
      iconName: "Box",
      heroImage:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Kitchen Finds",
      slug: "kitchen-finds",
      description:
        "Matte stoneware, minimalist espresso accessories, and chic hosting essentials.",
      iconName: "Utensils",
      heroImage:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Travel",
      slug: "travel",
      description:
        "Weekend carry-ons, minimalist packing cubes, and elevated airport aesthetics.",
      iconName: "Compass",
      heroImage:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "College Essentials",
      slug: "college-essentials",
      description:
        "Chic dorm decor, desk setup aesthetics, and small space apartment living.",
      iconName: "GraduationCap",
      heroImage:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Gift Guides",
      slug: "gift-guides",
      description:
        "Thoughtful luxuries, curated birthday finds, and gifts she will genuinely cherish.",
      iconName: "Gift",
      heroImage:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Lifestyle",
      slug: "lifestyle",
      description:
        "Aesthetic daily rituals, coffee table art books, and mindful living essentials.",
      iconName: "Coffee",
      heroImage:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Wellness",
      slug: "wellness",
      description:
        "Silk eye masks, ambient aromatherapy, and soothing self-care upgrades.",
      iconName: "Heart",
      heroImage:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Accessories",
      slug: "accessories",
      description:
        "Tortoiseshell sunglasses, silk hair ribbons, and elevated everyday accents.",
      iconName: "Sun",
      heroImage:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Seasonal Trends",
      slug: "seasonal-trends",
      description:
        "Curated seasonal capsule staples and aesthetic weather-transition outfits.",
      iconName: "Calendar",
      heroImage:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Holiday Collections",
      slug: "holiday-collections",
      description:
        "Elevated holiday table settings, party dresses, and festive hosting essentials.",
      iconName: "PartyPopper",
      heroImage:
        "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Amazon Viral Finds",
      slug: "amazon-viral-finds",
      description:
        "The most aesthetic, Pinterest-trending Amazon discoveries worth the hype.",
      iconName: "Flame",
      heroImage:
        "https://images.unsplash.com/photo-1513094735237-8f2a6d010483?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Collections", href: "/buying-guides" },
    { title: "Categories", href: "/categories" },
    { title: "Viral Finds", href: "/categories/amazon-viral-finds" },
    { title: "The Wishlist", href: "/best-picks" },
  ],
};
