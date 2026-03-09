import { Blocks, LayoutGrid, TreePine } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideIn";
import SlideInLeft from "@/components/animations/SlideInLeft";
import SlideInRight from "@/components/animations/SlideInRight";

const materials = [
  {
    title: "Concrete Blocks",
    description:
      "Strong and durable structural blocks designed for residential and commercial construction.",
    icon: Blocks,
  },
  {
    title: "Interlocking Pavers",
    description:
      "Durable paving materials ideal for driveways, walkways and outdoor surfaces.",
    icon: LayoutGrid,
  },
  {
    title: "Garden Tiles",
    description:
      "Decorative tiles designed to enhance landscaping and outdoor environments.",
    icon: TreePine,
  },
];

export default function ProductIntro() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Our Materials
            </p>
          </FadeIn>

          <SlideUp delay={0.1}>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Built For Strength & Reliability
            </h2>
          </SlideUp>

          <SlideInLeft delay={0.2}>
            <p className="mt-4 text-gray-600">
              Difference Construction manufactures durable construction
              materials designed to support residential, commercial
              and infrastructure projects across Malawi.
            </p>
          </SlideInLeft>

        </div>


        {/* MATERIAL TYPES */}
        <div className="grid md:grid-cols-3 gap-10">

          {materials.map((item, index) => {
            const Icon = item.icon;

            const Card = (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
              >

                <div className="w-14 h-14 mx-auto rounded-lg bg-green-600/10 text-green-600 flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">
                  {item.description}
                </p>

              </div>
            );

            if (index === 0) {
              return (
                <SlideInLeft key={item.title}>
                  {Card}
                </SlideInLeft>
              );
            }

            if (index === 1) {
              return (
                <SlideInRight key={item.title}>
                  {Card}
                </SlideInRight>
              );
            }

            return (
              <FadeIn key={item.title}>
                {Card}
              </FadeIn>
            );
          })}

        </div>

      </div>

    </section>
  );
}