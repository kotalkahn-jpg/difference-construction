import { supabase } from "@/lib/supabase"

export default async function MessagesPage() {

  const { data } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <main className="p-16">

      <h1 className="text-3xl font-bold mb-10">
        Customer Messages
      </h1>

      <div className="space-y-6">

        {data?.map((msg) => (

          <div
            key={msg.id}
            className="p-6 border rounded-lg"
          >

            <h3 className="font-semibold">
              {msg.name}
            </h3>

            <p className="text-sm text-gray-500">
              {msg.email}
            </p>

            <p className="mt-3">
              {msg.message}
            </p>

          </div>

        ))}

      </div>

    </main>
  )
}