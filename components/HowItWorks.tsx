import { MessageSquare, Factory, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Request Materials",
    description:
      "Contact us with your construction material requirements including quantity and delivery location.",
    icon: MessageSquare,
  },
  {
    title: "Production & Preparation",
    description:
      "We manufacture and prepare high-quality blocks, pavers or tiles according to your order.",
    icon: Factory,
  },
  {
    title: "Delivery & Transport",
    description:
      "Your materials are transported safely to your construction site or pickup location.",
    icon: Truck,
  },
  {
    title: "Project Ready",
    description:
      "Receive your materials and begin construction with reliable, durable products.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Our Supply Process
          </h2>

          <p className="mt-4 text-gray-600">
            From request to delivery, our streamlined process ensures reliable
            construction materials for every project.
          </p>

        </div>

        {/* PROCESS CONTAINER */}
        <div className="relative">

          {/* CONNECTING LINE */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-gray-200"></div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
                >

                  {/* STEP NUMBER */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>

                  {/* ICON */}
                  <Icon className="w-7 h-7 text-green-600 mx-auto mt-6 mb-4" />

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-2 text-gray-600 text-sm">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}