import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTASection from "@/components/CTASection"
import { getBlogs } from "@/lib/services"

type Props = {
  params: { id: string }
}

export default async function BlogPage({ params }: Props) {

  const posts = await getBlogs()
  const post = posts.find(p => p.id === Number(params.id))

  if (!post) {
    return <div className="p-20 text-center">Article not found</div>
  }

  const related = posts
    .filter(p => p.id !== post.id)
    .slice(0, 3)

  return (
    <main>

      <Navbar />

      <article className="max-w-4xl mx-auto py-24 px-6">

        {/* Title */}

        <h1 className="text-4xl font-bold mb-4">
          {post.title}
        </h1>

        <div className="text-gray-500 mb-10">
          {post.author} • {post.date}
        </div>

        {/* Hero Image */}

        <img
          src={post.image}
          className="rounded-lg mb-10"
        />

        {/* Content */}

        <div className="prose max-w-none text-gray-700">

          <p>{post.content}</p>

        </div>


        {/* Key Takeaways */}

        <div className="bg-[var(--muted)] p-6 rounded-lg mt-16">

          <h3 className="font-bold mb-3">
            Key Takeaways
          </h3>

          <ul className="list-disc pl-6">

            <li>Choose high quality materials</li>
            <li>Ensure proper installation</li>
            <li>Work with reliable suppliers</li>

          </ul>

        </div>

      </article>


      {/* Related Articles */}

      <section className="py-20 bg-[var(--muted)]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {related.map(p => (

              <a
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

              </a>

            ))}

          </div>

        </div>

      </section>

      <CTASection />

      <Footer />

    </main>
  )
}