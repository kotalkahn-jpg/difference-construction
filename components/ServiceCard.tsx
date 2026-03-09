import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function ServiceCard({ product }: Props) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition duration-300">

      {/* TOP PANEL */}
      <div className="relative h-[220px] flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">

        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={160}
          className="object-contain drop-shadow-2xl"
        />

      </div>

      {/* BOTTOM INFO PANEL */}
      <div className="bg-white p-6 rounded-t-3xl -mt-8 relative z-10">

        <h3 className="text-xl font-semibold text-gray-900">
          {product.name}
        </h3>

        {/* TAGS */}
        <div className="flex gap-2 mt-3">

          <span className="text-xs border px-2 py-1 rounded-md text-gray-600">
            Durable
          </span>

          <span className="text-xs border px-2 py-1 rounded-md text-gray-600">
            Construction
          </span>

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mt-4 line-clamp-3">
          {product.description}
        </p>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between mt-6">

          <div>
            <p className="text-xs text-gray-500">PRICE</p>
            <p className="text-xl font-bold text-gray-900">
              MWK {product.price}
            </p>
          </div>

          <Link
            href="#"
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-md transition"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}