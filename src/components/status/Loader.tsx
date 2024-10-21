import { LoaderCircle } from "lucide-react";

function Loader() {
  return (
    <div className="flex items-center justify-center py-32 text-[#4f4fff]">
      <LoaderCircle className="animate-spin" strokeWidth={2} size={100} />
    </div>
  );
}

export default Loader;
