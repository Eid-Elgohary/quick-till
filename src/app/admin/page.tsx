"use client";
import { useEffect, useState } from "react";
import { getAllProducts, Product } from "@/firebase/productsUtils";
import Products from "./products/page";

function Admin() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return <Products productsArr={products} />;
}

export default Admin;
