import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTASection from "@/components/CTASection"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !product) {
    return <div className="p-20 text-center">Product not found</div>
  }

  const { data: related } = await supabase
    .from("products")
    .select("*")
    .neq("id", product.id)
    .limit(3)

  return (
    <main>

      <Navbar />

      {/* Breadcrumb */}

      <div className="max-w-7xl mx-auto px-6 mt-10 text-sm text-gray-500">

        <Link href="/">Home</Link> / 
        <Link href="/services"> Products</Link> / 
        <span> {product.name}</span>

      </div>


      {/* Product Hero */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6">

          <img
            src={product.image}
            className="rounded-lg shadow-lg"
          />

          <div>

            <h1 className="text-4xl font-bold mb-6">
              {product.name}
            </h1>

            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            <div className="text-2xl font-bold text-[var(--primary)] mb-8">
              MWK {product.price}
            </div>

            <button className="btn-primary">
              Request Quote
            </button>

          </div>

        </div>

      </section>


      {/* Specifications */}

      <section className="bg-[var(--muted)] py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Specifications
          </h2>

          <table className="w-full">

            <tbody>

              <tr className="border-b">
                <td className="py-4 font-semibold">Material</td>
                <td>Concrete</td>
              </tr>

              <tr className="border-b">
                <td className="py-4 font-semibold">Strength</td>
                <td>High durability</td>
              </tr>

              <tr className="border-b">
                <td className="py-4 font-semibold">Usage</td>
                <td>Construction and landscaping</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* Applications */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Applications
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">

            <li>✔ Residential construction</li>
            <li>✔ Commercial buildings</li>
            <li>✔ Boundary walls</li>
            <li>✔ Infrastructure projects</li>

          </ul>

        </div>

      </section>


      {/* Related Products */}

      {related && related.length > 0 && (

        <section className="bg-[var(--muted)] py-20">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-3xl font-bold mb-10">
              Related Products
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {related.map((p) => (

                <Link
                  key={p.id}
                  href={`/services/${p.id}`}
                  className="bg-white p-6 shadow rounded-lg hover:shadow-lg"
                >

                  <img
                    src={p.image}
                    className="h-40 w-full object-cover rounded mb-4"
                  />

                  <h3 className="font-semibold">
                    {p.name}
                  </h3>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      <CTASection />

      <Footer />

    </main>
  )
}