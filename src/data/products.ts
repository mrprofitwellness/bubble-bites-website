export interface NutritionFact {
  nutrient: string;
  per100g: string;
  perServing: string;
  rdaPerServing: string;
}

export interface Product {
  id: "hazelnut" | "dark-chocolate" | "orange";
  name: string;
  flavor: string;
  weight: string;
  category: string;
  tagline: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  nutrition: NutritionFact[];
  bg: string;
  heroBg: string;
  heroHeadline: string;
  heroAccent: string;
  accent: string;
  text: string;
  packagingImage: string;
  packagingOuter?: string;
  packagingInner?: string;
}

export const products: Product[] = [
  {
    id: "hazelnut",
    name: "Hazelnut",
    flavor: "Hazelnut",
    weight: "13g",
    category: "Chocolate Protein Bar",
    tagline: "Crunchy Hazelnut, Rich Chocolate",
    description:
      "A sugar-free dark chocolate protein bar with the irresistible crunch of hazelnuts. Packed with brain-boosting Shankhpushpi and Brahmi.",
    ingredients: [
      "Sugar Free Dark Chocolate",
      "Cocoa Mass",
      "Maltitol",
      "Cocoa Butter",
      "Emulsifier (Lecithin)",
      "Shankhpushpi",
      "Brahmi",
      "Creatinine",
      "Hazelnut Flavour",
    ],
    benefits: ["Weight Management", "Metabolism Booster", "Support Weight Loss"],
    nutrition: [
      { nutrient: "Energy", per100g: "565.33 kcal", perServing: "84.80 kcal", rdaPerServing: "4.24%" },
      { nutrient: "Protein", per100g: "3.83g", perServing: "0.57g", rdaPerServing: "1.06%" },
      { nutrient: "Carbohydrate", per100g: "59.34g", perServing: "8.90g", rdaPerServing: "6.85%" },
      { nutrient: "Total Sugar", per100g: "0g", perServing: "0g", rdaPerServing: "0%" },
      { nutrient: "Added Sugar", per100g: "0g", perServing: "0g", rdaPerServing: "0%" },
      { nutrient: "Total Fat", per100g: "35.12g", perServing: "5.27g", rdaPerServing: "7.86%" },
    ],
    bg: "#1B7A6E",
    heroBg: "#1B7A6E",
    heroHeadline: "#FFFFFF",
    heroAccent: "#D4A853",
    accent: "#E8F5F2",
    text: "#FFFFFF",
    packagingImage: "/images/packaging/hazelnut-13g.jpg",
    packagingInner: "/images/packaging/hazelnut-inner.png",
    packagingOuter: "/images/packaging/hazelnut-outer.png",
  },
  {
    id: "dark-chocolate",
    name: "Dark Chocolate",
    flavor: "Dark Chocolate",
    weight: "13g",
    category: "Chocolate Protein Bar",
    tagline: "Pure Dark, Bold Chocolate",
    description:
      "Rich, bold, and sugar-free. Deep cocoa flavour with brain-boosting Shankhpushpi and Brahmi. The ultimate guilt-free chocolate experience.",
    ingredients: [
      "Sugar Free Dark Chocolate",
      "Cocoa Mass",
      "Maltitol",
      "Cocoa Butter",
      "Emulsifier (Lecithin)",
      "Shankhpushpi",
      "Brahmi",
      "Creatinine",
    ],
    benefits: ["Weight Management", "Metabolism Booster", "Support Weight Loss"],
    nutrition: [
      { nutrient: "Energy", per100g: "565.33 kcal", perServing: "84.80 kcal", rdaPerServing: "4.24%" },
      { nutrient: "Protein", per100g: "3.83g", perServing: "0.57g", rdaPerServing: "1.06%" },
      { nutrient: "Carbohydrate", per100g: "59.34g", perServing: "8.90g", rdaPerServing: "6.85%" },
      { nutrient: "Total Sugar", per100g: "0g", perServing: "0g", rdaPerServing: "0%" },
      { nutrient: "Added Sugar", per100g: "0g", perServing: "0g", rdaPerServing: "0%" },
      { nutrient: "Total Fat", per100g: "35.12g", perServing: "5.27g", rdaPerServing: "7.86%" },
    ],
    bg: "#5C4033",
    heroBg: "#5C4033",
    heroHeadline: "#FFFFFF",
    heroAccent: "#C4A882",
    accent: "#F0EBE6",
    text: "#FFFFFF",
    packagingImage: "/images/packaging/dark-chocolate-13g.jpg",
    packagingOuter: "/images/packaging/dark-chocolate-outer.png",
    packagingInner: "/images/packaging/dark-chocolate-inner.png",
  },
  {
    id: "orange",
    name: "Orange Chocolate",
    flavor: "Orange",
    weight: "13g",
    category: "Chocolate Protein Bar",
    tagline: "Zesty Orange, Smooth Chocolate",
    description:
      "A burst of citrus meets smooth dark chocolate. Sugar-free with brain-boosting Shankhpushpi and Brahmi. Refreshing and energizing.",
    ingredients: [
      "Sugar Free Dark Chocolate",
      "Cocoa Mass",
      "Maltitol",
      "Cocoa Butter",
      "Emulsifier (Lecithin)",
      "Shankhpushpi",
      "Brahmi",
      "Creatinine",
      "Orange Flavour",
    ],
    benefits: ["Weight Management", "Metabolism Booster", "Support Weight Loss"],
    nutrition: [
      { nutrient: "Energy", per100g: "565.33 kcal", perServing: "84.80 kcal", rdaPerServing: "4.24%" },
      { nutrient: "Protein", per100g: "3.83g", perServing: "0.57g", rdaPerServing: "1.06%" },
      { nutrient: "Carbohydrate", per100g: "59.34g", perServing: "8.90g", rdaPerServing: "6.85%" },
      { nutrient: "Total Sugar", per100g: "0g", perServing: "0g", rdaPerServing: "0%" },
      { nutrient: "Added Sugar", per100g: "0g", perServing: "0g", rdaPerServing: "0%" },
      { nutrient: "Total Fat", per100g: "35.12g", perServing: "5.27g", rdaPerServing: "7.86%" },
    ],
    bg: "#F28C38",
    heroBg: "#F28C38",
    heroHeadline: "#FFFFFF",
    heroAccent: "#4A2000",
    accent: "#FFF0E3",
    text: "#FFFFFF",
    packagingImage: "/images/packaging/orange-13g.jpg",
    packagingInner: "/images/packaging/orange-inner.png",
    packagingOuter: "/images/packaging/orange-outer.png",
  },
];

export const brandInfo = {
  name: "Bubble Bites",
  tagline: "Snack Smart. Play Hard.",
  description:
    "Protein-packed chocolate bars kids actually love. Sugar-free, brain-boosting, and irresistibly delicious.",
  parentCompany: "Mr. Pro-Fit Wellness",
  website: "www.mrprofitwellness.com",
  email: "info@mrprofitwellness.com",
  phone: "+91 92271 81401",
  logo: "/images/logos/bubble-bites-logo.png",
  logoSvg: "/images/logos/bubble-bites-logo.svg",
};
