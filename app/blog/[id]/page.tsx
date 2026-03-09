import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTASection from "@/components/CTASection"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !post) {
    return <div className="p-20 text-center">Article not found</div>
  }

  const { data: related } = await supabase
    .from("blog_posts")
    .select("*")
    .neq("id", post.id)
    .limit(3)

  return (
    <main>

      <Navbar />

      <article className="max-w-4xl mx-auto py-24 px-6">

        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <div className="text-gray-500 mb-10">
          {post.author} • {post.date}
        </div>

        <img
          src={post.image}
          className="rounded-lg mb-10"
        />

        <div className="prose max-w-none text-gray-700">

          <p>{post.content}</p>

        </div>


        {/* Key Takeaways */}

        <div className="bg-[var(--muted)] p-6 rounded-lg mt-16">

          <h3 className="font-bold mb-3">
            Key Takeaways
          </h3>

          <ul className="list-disc pl-6">

            <li>Choose high quality construction materials</li>
            <li>Ensure proper installation</li>
            <li>Work with reliable suppliers</li>

          </ul>

        </div>

      </article>


      {/* Related Articles */}

      {related && related.length > 0 && (

        <section className="py-20 bg-[var(--muted)]">

          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl font-bold mb-10">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {related.map((p) => (

                <Link
                  key={p.id}
                  href={`/blog/${p.id}`}
                  className="bg-white shadow rounded-lg p-6"
                >

                  <img
                    src={p.image}
                    className="h-40 w-full object-cover rounded mb-4"
                  />

                  <h3 className="font-semibold">
                    {p.title}
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