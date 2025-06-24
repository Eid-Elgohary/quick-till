import { Badge } from "../ui/badge";
import eee from "../../../public/file.svg";



export default function ProductCard() {
  return (
    <div className="p-3 rounded-lg bg-secondary shadow-sm transition hover:shadow-md">
      <div className="h-[100px] w-full bg-gray-100 rounded-lg flex items-center justify-center mb-3">
        <img src={eee} className="w-18 h-18 object-contain" alt="product" />
      </div>

      <h3 className="text-sm font-medium mb-1 truncate">Product Title</h3>

      <div className="flex justify-between items-center">
        <p className="text-primary font-semibold">$55.5</p>
        <div className="flex items-center gap-1">
          <Badge className="rounded-full w-4 h-4 cursor-pointer px-2">+</Badge>
          <span className="text-sm">1</span>
          <Badge className="rounded-full w-4 h-4 cursor-pointer px-2">-</Badge>
        </div>
      </div>
    </div>
  );
}
