
type productsProps = {
  product_id: number;
  price: number;
  quantity: number;
  product_name: string;
  created_at?: string;
};

function Receipt({
  items,
  subtotal,
}: {
  subtotal: number;
  items: productsProps[];
}) {

  const tax = subtotal * 0.05;
  const totalPrice = subtotal + tax;
  
  return (
    <div className="text-center w-[300px] m-auto text-black py-5 px-4 ">
      <div className="text-center">
        <h2 className="text-xl font-medium mb-4">quick till</h2>
        <p className=" mb-2">
          order id:<span>5</span>
        </p>
      </div>
      <div className="text-right">11/11/222</div>
      <div className="border-t-2 border-black my-2 border-dashed border-b-2 py-2 flex justify-between">
        <p className="text-xs">
          order# <span>444</span>
        </p>
        <p className="text-xs">
          guest <span>2</span>
        </p>
        <p className="text-xs">dsd</p>
      </div>
      <div className="mb-2">

      {items.map((item) => (
        <div key={item.product_id} className="flex mb-2 justify-between py-1">
          <p className="text-xs w-[25%]">{item.product_name.slice(0, 7)}</p>
          <p className="text-xs w-[25%]">{item.quantity}</p>
          <p className="text-xs w-[25%]">${item.price.toFixed(2)}</p>
          <p className="text-xs w-[25%]">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      </div>

      <div className="flex mb-2 justify-between border-t-2 pt-2 border-black border-dashed">
        subtotal: <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex mb-2 justify-between">
        tax: <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex mb-2 justify-between border-t-2 pt-2 border-black border-dashed">
        total: <span> ${totalPrice.toFixed(2)}</span>
      </div>

      <div className="text-xs text-gray-500 mt-4  pt-2">
        your satisfaction is our priority <br />
        we hope see you again
      </div>
    </div>
  );
}

export default Receipt;
