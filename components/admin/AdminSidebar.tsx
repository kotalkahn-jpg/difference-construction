import Link from "next/link"

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-black text-white p-8">

      <h2 className="text-2xl font-bold mb-10">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-6">

        <Link
          href="/admin"
          className="hover:text-green-400"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/products"
          className="hover:text-green-400"
        >
          Products
        </Link>

        <Link
          href="/admin/blog"
          className="hover:text-green-400"
        >
          Blog
        </Link>

        <Link
          href="/admin/messages"
          className="hover:text-green-400"
        >
          Messages
        </Link>

      </nav>

    </aside>
  )
}