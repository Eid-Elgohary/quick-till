"use client";
import { useState } from "react";
import { IProduct } from "../../firebase/productsUtils";

type product = {
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  category: string;
  img: string;
  barcode: string;
  created_at: any;
};
export default function ProductCard({
  setOrder,
  product,
}: {
  product: IProduct;
  setOrder: React.Dispatch<React.SetStateAction<product[]>>;
}) {
  const [count, setCount] = useState(1);

  // function handleAddOrder(e: React.MouseEvent<HTMLDivElement>): void {
  //   e.stopPropagation();
  //   if (count < 1 || count > product.stock) {
  //     return;
  //   }

  //   const order = {
  //     product_id: product.product_id,
  //     price: product.price,
  //     quantity: count,
  //     product_name: product.product_name,
  //     created_at: new Date().toISOString(),
  //   };
    
  //   setOrder((prevOrders) => {
  //     const existingOrderIndex = prevOrders.findIndex(
  //       (item) => item.product_id === order.product_id
  //     );

  //     if (existingOrderIndex !== -1) {
  //       const updatedOrders = [...prevOrders];
  //       updatedOrders[existingOrderIndex].quantity += count;
  //       return updatedOrders;
  //     } else {
  //       return [...prevOrders, order];
  //     }
  //   });
  //   setCount(1);
  // }



function handleAddOrder(e: React.MouseEvent<HTMLDivElement>): void {
  e.stopPropagation();


  if (count < 1 || count > product.stock) return;

  const newOrder: product = {
    product_id: product.product_id,
    product_name: product.product_name,
    price: product.price,
    quantity: count,
    category: product.category,
    img: product.img,
    barcode: product.barcode,
    created_at: new Date().toISOString(),
  };

  setOrder((prevOrders: product[]) => {
    const exists = prevOrders.some(
      (item) => item.product_id === product.product_id
    );

    if (exists) {
      return prevOrders.map((item) =>
        item.product_id === product.product_id
          ? {
              ...item,
              quantity: item.quantity + count, 
            }
          : item
      );
    } else {
      return [...prevOrders, newOrder];
    }
  });

}

  return (
    <div
      onClick={handleAddOrder}
      className="p-2 w-[100px] sm:w-[110px] md:w-[120px] rounded-lg bg-black cursor-pointer shadow-sm transition hover:shadow-md"
    >
      <div className="h-[80px] w-[82px] sm:h-[90px] sm:w-[92px] md:h-[100px] md:w-[102px] bg-gray-100 rounded-lg flex items-center justify-center mb-3">
        <img src="#" className="w-15 h-15 object-contain" alt="product" />
      </div>

      <h3 className="text-xs md:text-sm  mb-2 truncate">
        {product.product_name}
      </h3>

      <div className="flex justify-between items-center">
        <p className="text-primary text-xs md:text-sm me-1 font-semibold">
          ${product.price}
        </p>
        <div className="flex items-center gap-1">
          <input
            min={1}
            max={product.stock}
            onClick={(e) => e.stopPropagation()}
            value={count}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCount(Number(e.target.value))
            }
            type="number"
            className="rounded-lg ps-2 border w-[40px] "
          />
        </div>
      </div>
      <p className="text-xs md:text-sm mt-1">stock : {product.stock} </p>
    </div>
  );
}
