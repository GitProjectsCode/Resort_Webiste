// VD Resort & Agro Tourism - Data File

export const RESORT_INFO = {
  name: "VD Resort",
  tagline: "& Agro Tourism",
  fullName: "VD Resort & Agro Tourism",
  phone: "+91 99999 99999",
  whatsapp: "9999999999",
  email: "info@vdresort.in",
  address: "Karjat, Maharashtra, India",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.123456789!2d73.3!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU0JzAwLjAiTiA3M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  facebook: "https://facebook.com/vdresort",
  instagram: "https://instagram.com/vdresort",
};

export const FEATURES = [
  {
    id: 1,
    icon: "MdPool",
    title: "Swimming Pool",
    description: "Crystal clear pool with stunning garden views",
    color: "#2196F3",
  },
  {
    id: 2,
    icon: "GiTreehouse",
    title: "Garden Area",
    description: "Lush green gardens perfect for relaxation",
    color: "#4CAF50",
  },
  {
    id: 3,
    icon: "MdLocalParking",
    title: "Free Parking",
    description: "Spacious parking area for all guests",
    color: "#FF9800",
  },
  {
    id: 4,
    icon: "MdSportsEsports",
    title: "Indoor Games",
    description: "Fun-filled indoor gaming activities",
    color: "#9C27B0",
  },
  {
    id: 5,
    icon: "GiCampfire",
    title: "Bonfire",
    description: "Magical bonfire evenings under the stars",
    color: "#FF5722",
  },
  {
    id: 6,
    icon: "MdRestaurant",
    title: "Delicious Food",
    description: "Authentic local and continental cuisine",
    color: "#E91E63",
  },
  {
    id: 7,
    icon: "MdSupportAgent",
    title: "24x7 Assistance",
    description: "Round-the-clock support for all your needs",
    color: "#00BCD4",
  },
  {
    id: 8,
    icon: "GiPalmTree",
    title: "Nature Walks",
    description: "Guided nature trails through scenic landscapes",
    color: "#8BC34A",
  },
];

export const ROOMS = [
  {
    id: 1,
    name: "Deluxe Room",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    capacity: "2-3 Persons",
    type: "AC Room",
    amenities: ["Attached Bathroom", "Hot Water", "TV", "WiFi"],
    price: "₹2,500/night",
    description:
      "Cozy and elegant room with modern amenities and garden views.",
  },
  {
    id: 2,
    name: "Premium Room",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
    capacity: "3-4 Persons",
    type: "AC Room",
    amenities: ["Attached Bathroom", "Hot Water", "TV", "WiFi", "Balcony"],
    price: "₹3,500/night",
    description: "Spacious premium room with private balcony and pool view.",
  },
  {
    id: 3,
    name: "Family Suite",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80",
    capacity: "4-5 Persons",
    type: "AC Room",
    amenities: [
      "Attached Bathroom",
      "Hot Water",
      "TV",
      "WiFi",
      "Living Area",
      "Mini Bar",
    ],
    price: "₹4,500/night",
    description:
      "Perfect for families with a spacious suite and luxury amenities.",
  },
  {
    id: 4,
    name: "Agro Cottage",
    image:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=80",
    capacity: "2-5 Persons",
    type: "Non-AC",
    amenities: ["Attached Bathroom", "Hot Water", "Fan", "Nature View"],
    price: "₹1,800/night",
    description:
      "Rustic cottage experience surrounded by organic farmland.",
  },
];

export const PACKAGES = [
  {
    id: 1,
    name: "Day Picnic",
    subtitle: "Perfect Day Out",
    price: "₹600",
    unit: "Per Person",
    color: "#2d6a4f",
    gradient: "linear-gradient(135deg, #2d6a4f, #52b788)",
    popular: false,
    includes: [
      "Welcome Drink",
      "Breakfast",
      "Lunch",
      "Evening Tea & Snacks",
      "Swimming Pool Access",
      "Indoor Games",
      "Garden Area",
      "Free Parking",
    ],
    timing: "9:00 AM – 6:00 PM",
  },
  {
    id: 2,
    name: "Night Stay",
    subtitle: "Most Popular",
    price: "₹1,200",
    unit: "Per Person",
    color: "#b5830c",
    gradient: "linear-gradient(135deg, #b5830c, #f4a261)",
    popular: true,
    includes: [
      "Welcome Drink",
      "Dinner",
      "Bonfire",
      "Overnight Stay",
      "Breakfast",
      "Swimming Pool",
      "Indoor Games",
      "All Day Activities",
    ],
    timing: "Check-in 2PM – Check-out 11AM",
  },
  {
    id: 3,
    name: "Group Package",
    subtitle: "10+ Persons",
    price: "Best Price",
    unit: "Special Discount",
    color: "#1a472a",
    gradient: "linear-gradient(135deg, #1a472a, #2d6a4f)",
    popular: false,
    includes: [
      "Customizable Menu",
      "Dedicated Host",
      "Bulk Discount",
      "Team Building Activities",
      "Bonfire",
      "DJ & Music",
      "Photography Area",
      "Corporate Events",
    ],
    timing: "Flexible Timings",
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800&q=80",
    alt: "Resort Pool",
    category: "pool",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    alt: "Luxury Room",
    category: "rooms",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Resort Garden",
    category: "garden",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Delicious Food",
    category: "food",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    alt: "Resort View",
    category: "resort",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Food Spread",
    category: "food",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    alt: "Room Interior",
    category: "rooms",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80",
    alt: "Night View",
    category: "resort",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    alt: "Spa & Wellness",
    category: "resort",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine Dining",
    category: "food",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Pool Area",
    category: "pool",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    alt: "Garden Walk",
    category: "garden",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#features" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];
