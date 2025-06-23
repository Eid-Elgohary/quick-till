import { BarLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-full h-screen  z-[99]">
      <BarLoader height={5} width={120} color="#FAC1D9" aria-label="loading" />
    </div>
  );
}
