// 📁 firebase/products.ts

import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export interface Product {
  product_id: number;
  product_name: string;
  price: number;
  cost: number;
  quantity: number;
  category: string;
  img: string;
  barcode: string;
  created_at: any;
}

export async function getAllProducts(): Promise<Product[]> {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);

  const products: Product[] = [];
  snapshot.forEach((doc) => {
    products.push(doc.data() as Product);
  });

  return products;
}
