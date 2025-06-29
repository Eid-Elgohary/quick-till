import { Trash2 } from "lucide-react";

type order = {
  product_name: string;
  product_id: number;
  quantity: number;
  price: number;
};

type orderProps = {
  order: order;
  handleDeleteItem: (id: number) => void;

  allOrders: order[];
};

function OrderRow({ order, handleDeleteItem }: orderProps) {
  return (
    <div className="flex justify-between bg-[#3D4142] rounded-lg mb-2 py-2 px-2 md:px-4">
      <div className="flex items-center gap-2">
        <span
          onClick={() => handleDeleteItem(order.product_id)}
          className="cursor-pointer"
        >
          <Trash2 color="red" size={20} />
        </span>
        <p className="font-lighter text-nowrap text-xs md:text-sm tracking-wider">
          {order.product_name.slice(0, 7)}{" "}
          <span className="text-gray-400 ps-2">&times;{order.quantity}</span>
        </p>
      </div>
      <p className="text-xs md:text-sm ">
        ${(order.price * order.quantity).toFixed(2)}
      </p>
    </div>
  );
}

export default OrderRow;
