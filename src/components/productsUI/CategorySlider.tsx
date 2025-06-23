// 📁 /components/product/CategorySlider.tsx

"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  Box,
  ShoppingCart,
  Utensils,
  Apple,
  Milk,
  Candy,
  Drumstick,
  IceCream,
  Package,
  Home,
} from "lucide-react";

const categories = [
  { name: "Drinks", count: 12, icon: <Utensils size={28} /> },
  { name: "Snacks", count: 8, icon: <Candy size={28} /> },
  { name: "Bakery", count: 5, icon: <Box size={28} /> },
  { name: "Dairy", count: 6, icon: <Milk size={28} /> },
  { name: "Fruits", count: 9, icon: <Apple size={28} /> },
  { name: "Vegetables", count: 7, icon: <Apple size={28} /> },
  { name: "Meat", count: 4, icon: <Drumstick size={28} /> },
  { name: "Frozen", count: 3, icon: <IceCream size={28} /> },
  { name: "Canned", count: 10, icon: <Package size={28} /> },
  { name: "Household", count: 11, icon: <Home size={28} /> },
  { name: "Cleaning", count: 6, icon: <Home size={28} /> },
  { name: "Pets", count: 3, icon: <Home size={28} /> },
  { name: "Health", count: 5, icon: <Home size={28} /> },
  { name: "Beauty", count: 7, icon: <Home size={28} /> },
  { name: "Beverages", count: 6, icon: <Utensils size={28} /> },
  { name: "Toys", count: 4, icon: <Box size={28} /> },
  { name: "Stationery", count: 2, icon: <Box size={28} /> },
  { name: "Tools", count: 3, icon: <Box size={28} /> },
  { name: "Electronics", count: 5, icon: <Box size={28} /> },
  { name: "Others", count: 1, icon: <Box size={28} /> },
];

interface Props {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategorySlider({ selectedCategory, onSelect }: Props) {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free",
    slides: {
      perView: "auto",
      // size: 0.25,
      spacing: 12,
    },
  });

  return (
    
    <div ref={sliderRef} className="keen-slider  px-2 py-4 overflow-x-auto max-w-full">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className={`keen-slider__slide min-w-[120px] max-w-[120px] h-[130px] cursor-pointer flex flex-col items-center justify-center rounded-lg border shadow-md transition-all
            ${selectedCategory === cat.name
              ? "bg-primary text-white border-primary"
              : "bg-muted text-muted-foreground border-border"}
            hover:scale-102 hover:shadow-lg
          `}
        >
          <div className="mb-2">{cat.icon}</div>
          <p className="text-sm font-semibold">{cat.name}</p>
          <p className="text-xs">{cat.count} items</p>
        </div>
      ))}
    </div>
  );
}
