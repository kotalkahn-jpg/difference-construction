import { getBlogs } from "@/lib/services"
import BlogCard from "./BlogCard"
import Link from "next/link"
import GetQuoteCTA from "./GetQuoteCTA"

export default async function BlogSection() {

  const posts = await getBlogs()

  return (
    <section className="py-28 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* INTRO ROW */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT TEXT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Construction Insights
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Latest Articles & Industry Knowledge
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
              Practical construction tips, industry insights, and
              expert advice from Difference Construction to help
              builders, contractors, and developers make better
              decisions on materials and projects.
            </p>

            <div className="w-16 h-[3px] bg-green-600 mt-6"></div>

          </div>


          {/* RIGHT VIDEO */}
          <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-lg">

            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://youtu.be/-GPRWNXwHuU?si=ssRNlq6rUbQu9ZtO"
              title="Difference Construction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

        </div>
<br></br>

        {/* BLOG LIST */}
         <h4 className="mt-2 text-3xl md:text-4xl font-bold text-green-900 ">
              Latest Articles & Industry Knowledge
            </h4>
            <br></br>
            <br></br>
        <div className="max-w-5xl mx-auto space-y-10">

          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}

        </div>


      

      </div>

    </section>
  )
}

