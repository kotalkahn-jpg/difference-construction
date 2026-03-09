import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[var(--primary)] text-white py-20">

      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-4">
          Need Quality Construction Materials?
        </h2>

        <p className="mb-8 text-lg">
          Our team is ready to supply durable concrete blocks,
          pavers and landscaping materials for your next project.
        </p>

        <Link
          href="/contact"
          className="bg-white text-black px-8 py-3 font-semibold rounded-md hover:bg-gray-200 transition"
        >
          Request Quote
        </Link>

      </div>

    </section>
  );
}