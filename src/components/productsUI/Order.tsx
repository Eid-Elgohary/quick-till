"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { makeOrder } from "@/firebase/productsUtils";

import OrderRow from "./OrderRow";
import Modal from "../ui/modal";
import Receipt from "../ui/Receipt";

type productsProps = {
  product_id: number;
  price: number;
  quantity: number;
  product_name: string;
};
type OrderProps = {
  orders: productsProps[];
  setOrders: React.Dispatch<React.SetStateAction<productsProps[]>>;
};

function Order({ setOrders, orders }: OrderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = orders.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const totalPrice = subtotal + tax;

  async function handlePrintReceipt() {
    setIsLoading(true);
    await makeOrder({
      products: orders.map((order) => ({ product_id: order.product_id, quantity: order.quantity, name:order.product_name })),
      total_price: totalPrice,
      pay_method: "cash",
      cashier_id: "12345",
    });
    setOrders([]);
    setIsLoading(false);
    setIsOpen(false);
  }

  function handleDeleteItem(id: number): void {
    const tempOrders = orders.filter((order) => order.product_id !== id);
    setOrders(tempOrders);
  }

  return (
    <div className="w-full  bg-secondary rounded-lg shadow-lg">
      <h3 className="py-3 px-4">customer #</h3>
      <div className="flex flex-col h-[80vh] relative justify-between ">
        <div className="font-lighter overflow-y-auto">
          {orders.length !== 0 ? (
            orders.map((order) => (
              <OrderRow
                key={order.product_id}
                handleDeleteItem={handleDeleteItem}
                order={order}
              />
            ))
          ) : (
            <p className="text-center mb-5 text-gray-500">No orders yet</p>
          )}
        </div>

        {orders.length !== 0 ? (
          <div className="mt-10 w-full min-h-[250px] text-sm sm:text-medium bg-[#3D4142] rounded-lg flex flex-col justify-between py-3 px-4">
            <div>
              <div className="flex mb-3 justify-between ">
                <p>subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex mb-3 justify-between ">
                <p>tax 5%</p>
                <p>${tax.toFixed(2)}</p>
              </div>

              <div className="flex pt-4 border-t-2 border-dashed justify-between ">
                <p>total</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <div className="px-5">
              <Button
                onClick={() => setIsOpen(true)}
                className="m-auto w-full block"
                color="primary"
              >
                pay
              </Button>
            </div>
          </div>
        ) : (
          <div className="min-h-[250px] bg-[#3D4142] rounded-lg flex items-center justify-center"></div>
        )}
        {isOpen && (
          <Modal onClose={() => setIsOpen(false)}>
            <Receipt items={orders} subtotal={subtotal} />
            <div className="flex justify-between mt-5 w-[75%] m-auto">
              <Button
                onClick={() => {
                  handlePrintReceipt();
                }}
                variant={"secondary"}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Print Receipt"}
              </Button>
              <Button onClick={() => setIsOpen(false)}>Add Product</Button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Order;
