import { BlogPost } from "@/types/blog"
import Image from "next/image"
import Link from "next/link"

type Props = {
  post: BlogPost
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="w-full bg-gray-100 border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">

      <div className="flex h-[180px]">

        {/* IMAGE */}
        <div className="relative w-[300px] flex-shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between p-6 flex-1">

          <div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
              {post.title}
            </h3>

            {/* META */}
            <div className="text-sm text-gray-500 mt-1 uppercase tracking-wide">
              {post.date}
            </div>

            {/* EXCERPT */}
            <p className="text-gray-600 text-sm mt-3 line-clamp-2">
              {post.excerpt}
            </p>

          </div>

          {/* READ MORE */}
          <Link
            href={`/blog/${post.id}`}
            className="text-gray-700 font-medium hover:underline text-sm"
          >
            Read more...
          </Link>

        </div>

      </div>

    </article>
  )
}