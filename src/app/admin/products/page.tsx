import CategorySlider from "@/components/productsUI/CategorySlider";
import ProductCard from "@/components/productsUI/ProductCard";

function Products( {productsArr}) {


  return(
  <div className="flex max-w-full">
    <div >
      <div className="overflow-hidden">
        <h1 className="text-xl text-primary font-bold ps-2">categories</h1>
        <CategorySlider />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-2 mt-2">
        {productsArr.map(product => (

          <h1 key={product.product_id} >{product.product_name}</h1>
        ))}
      </div>
    </div>
  </div>);
}

export default Products;


