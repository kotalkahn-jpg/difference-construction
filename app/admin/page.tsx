import { supabase } from "@/lib/supabase"

export default async function AdminDashboard() {

  const { count: productsCount } = await supabase
    .from("products")
    .select("*", { count: "exact", head: true })

  const { count: blogCount } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact", head: true })

  const { count: messagesCount } = await supabase
    .from("contact_messages")
    .select("*", { count: "exact", head: true })


  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-3 gap-8">


        {/* Products */}

        <div className="bg-white shadow-lg p-10 rounded-lg">

          <h3 className="text-lg font-semibold text-gray-500 mb-2">
            Total Products
          </h3>

          <p className="text-4xl font-bold text-green-500">
            {productsCount ?? 0}
          </p>

        </div>


        {/* Blog Posts */}

        <div className="bg-white shadow-lg p-10 rounded-lg">

          <h3 className="text-lg font-semibold text-gray-500 mb-2">
            Blog Articles
          </h3>

          <p className="text-4xl font-bold text-green-500">
            {blogCount ?? 0}
          </p>

        </div>


        {/* Messages */}

        <div className="bg-white shadow-lg p-10 rounded-lg">

          <h3 className="text-lg font-semibold text-gray-500 mb-2">
            Customer Messages
          </h3>

          <p className="text-4xl font-bold text-green-500">
            {messagesCount ?? 0}
          </p>

        </div>


      </div>

    </div>
  )
}