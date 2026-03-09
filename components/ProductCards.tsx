import { Blocks, LayoutGrid, TreePine } from "lucide-react";
import SlideInRight from "@/components/animations/SlideInRight";

export default function ProductCards() {

  const items = [
    {
      title: "Concrete Blocks",
      icon: <Blocks size={30} />,
    },
    {
      title: "Interlocking Pavers",
      icon: <LayoutGrid size={30} />,
    },
    {
      title: "Garden Tiles",
      icon: <TreePine size={30} />,
    },
  ];

  return (
    <div className="relative -mt-10 z-30 hidden md:block">

      <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-4 justify-center">

        {items.map((item, index) => (
          <SlideInRight key={index} delay={index * 0.2}>

            <div
              className="
                group relative flex items-center gap-3 px-8 py-5
                bg-white shadow-lg
                border border-gray-200
                transition-all duration-200
                hover:shadow-xl max-w-[260px]
              "
              style={{
                clipPath:
                  "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)",
              }}
            >

              <div className="text-green-600 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <span className="font-semibold text-gray-800 text-sm group-hover:text-green-600">
                {item.title}
              </span>

            </div>

          </SlideInRight>
        ))}

      </div>

    </div>
  );
}