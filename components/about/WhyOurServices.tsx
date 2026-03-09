import { Boxes, Building2, Truck, ShieldCheck } from "lucide-react";
import SlideInLeft from "@/components/animations/SlideInLeft";
import SlideInRight from "@/components/animations/SlideInRight";

const services = [
  {
    title: "Durable Construction Materials",
    description:
      "We manufacture high-quality concrete blocks and building materials designed for structural strength and long-term reliability.",
    icon: Building2,
  },
  {
    title: "Interlocking Pavers & Tiles",
    description:
      "Our interlocking pavers and decorative tiles enhance outdoor spaces, driveways, and walkways with durable design solutions.",
    icon: Boxes,
  },
  {
    title: "Reliable Delivery",
    description:
      "We ensure efficient transportation and timely delivery of materials directly to your construction site.",
    icon: Truck,
  },
  {
    title: "Trusted Quality Assurance",
    description:
      "All products are produced under strict quality standards to ensure durability, consistency, and compliance.",
    icon: ShieldCheck,
  },
];

export default function WhyOurServices() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
            Our Services
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Materials
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We focus on delivering reliable construction materials that help
            contractors, builders, and developers complete projects with
            confidence.
          </p>

        </div>

        {/* ZIG ZAG */}
        <div className="space-y-10">

          {services.map((item, index) => {
            const Icon = item.icon;
            const isRight = index % 2 !== 0;

            const CardContent = (
              <div
                key={item.title}
                className={`flex ${
                  isRight ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    w-full md:w-[70%]
                    rounded-2xl
                    border border-white/40
                    bg-white/70
                    backdrop-blur-lg
                    shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                    px-8 py-10
                    ${isRight ? "md:ml-24" : "md:mr-24"}
                  `}
                >
                  <div className="flex items-start gap-6">

                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-green-600/10 text-green-700 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-gray-700 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            );

            return index % 2 === 0 ? (
              <SlideInLeft key={item.title} delay={index * 0.2}>
                {CardContent}
              </SlideInLeft>
            ) : (
              <SlideInRight key={item.title} delay={index * 0.2}>
                {CardContent}
              </SlideInRight>
            );
          })}

        </div>

      </div>

    </section>
  );
}