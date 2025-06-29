"use client";
import CategorySlider from "@/components/productsUI/CategorySlider";
import Order from "@/components/productsUI/Order";
import ProductCard from "@/components/productsUI/ProductCard";
import { useState } from "react";

type productsProps = {
  product_id: number;
  price: number;
  quantity: number;
  product_name: string;
};

function Products({ productsArr }: productsProps[]) {
  const [orders, setOrders] = useState<productsProps[]>([]);

  if (!productsArr || productsArr.length === 0) {
    return (
      <div className="text-center text-gray-500">No products available</div>
    );
  }

  return (
    <div className="flex pt-[72px] pe-[180px] sm:pe-[250px] md:pe-[290px] max-w-full">
      <div className="w-full ">
        <div className="overflow-hidden ">
          {/* <h1 className="text-xl text-primary font-bold p-2">categories</h1> */}
          <CategorySlider />
        </div>

        <div className="flex flex-wrap h-screen overflow-scroll gap-2 px-2 mt-2">
          {productsArr.map((item: any) => (
            <ProductCard
              key={item.product_id}
              setOrder={setOrders}
              product={item}
            />
          ))}
        </div>
      </div>

      <div className="w-[180px] bg-secondary min-h-[90vh] sm:w-[250px] md:w-[290px] fixed right-0 top-[72px] rounded-lg py-2 pe-1 sm:pe-2 md:pe-3">
        <Order orders={orders} setOrders={setOrders} />
      </div>
    </div>
  );
}

export default Products;
