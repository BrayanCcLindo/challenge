import { TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-gray-400 font-lato">
      <div className="space-y-4 text-center">
        <TriangleAlert className="w-12 h-12 mx-auto" />
        <h1 className="text-2xl font-bold">Lo sentimos</h1>
        <p className="text-muted-foreground">
          Ha ocurrido un error. Por favor, inténtelo más tarde.
        </p>
        <Button>
          <Link to="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
