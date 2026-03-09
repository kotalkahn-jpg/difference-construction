"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Blog = {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
}

export default function AdminBlog() {

  const [posts, setPosts] = useState<Blog[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)

  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState("")

  async function fetchPosts() {

    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .order("id", { ascending: true })

    if (data) setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  /* ---------------- IMAGE COMPRESSION ---------------- */

  async function compressImage(file: File): Promise<File> {

    return new Promise((resolve) => {

      const img = new Image()
      const reader = new FileReader()

      reader.onload = (e) => {
        img.src = e.target?.result as string
      }

      img.onload = () => {

        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        const MAX_WIDTH = 1200
        const scale = MAX_WIDTH / img.width

        canvas.width = MAX_WIDTH
        canvas.height = img.height * scale

        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)

        canvas.toBlob((blob) => {

          if (!blob) return

          const compressedFile = new File([blob], file.name, {
            type: "image/jpeg",
            lastModified: Date.now(),
          })

          resolve(compressedFile)

        }, "image/jpeg", 0.7)

      }

      reader.readAsDataURL(file)

    })
  }

  /* ---------------- IMAGE UPLOAD ---------------- */

  async function uploadImage(file: File) {

    const compressed = await compressImage(file)

    const fileExt = compressed.name.split(".").pop()
    const fileName = `${Date.now()}.${fileExt}`

    const { error } = await supabase.storage
      .from("images")
      .upload(fileName, compressed)

    if (error) {
      console.error(error)
      alert("Image upload failed")
      return
    }

    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(fileName)

    setImage(data.publicUrl)
  }

  /* ---------------- CREATE ---------------- */

  async function addPost(e: React.FormEvent) {

    e.preventDefault()

    await supabase
      .from("blog_posts")
      .insert([
        {
          title,
          excerpt,
          content,
          image
        }
      ])

    resetForm()
    fetchPosts()
  }

  /* ---------------- DELETE ---------------- */

  async function deletePost(id: number) {

    const confirmDelete = confirm("Delete this post?")
    if (!confirmDelete) return

    await supabase
      .from("blog_posts")
      .delete()
      .eq("id", id)

    fetchPosts()
  }

  /* ---------------- EDIT ---------------- */

  function startEdit(post: Blog) {

    setEditingId(post.id)

    setTitle(post.title)
    setExcerpt(post.excerpt)
    setContent(post.content)
    setImage(post.image)
  }

  /* ---------------- UPDATE ---------------- */

  async function updatePost(e: React.FormEvent) {

    e.preventDefault()

    if (!editingId) return

    await supabase
      .from("blog_posts")
      .update({
        title,
        excerpt,
        content,
        image
      })
      .eq("id", editingId)

    resetForm()
    fetchPosts()
  }

  function resetForm() {

    setEditingId(null)
    setTitle("")
    setExcerpt("")
    setContent("")
    setImage("")
  }

  return (
    <main className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-3xl font-bold text-gray-900 mb-10">
        Blog Manager
      </h1>

      {/* FORM */}

      <form
        onSubmit={editingId ? updatePost : addPost}
        className="grid grid-cols-1 gap-6 mb-12 bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
      >

        <input
          placeholder="Blog Title"
          className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Excerpt"
          className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />

        <textarea
          placeholder="Full Content"
          rows={6}
          className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Upload Image */}

        <div>

          <label className="block font-semibold text-gray-700 mb-2">
            Upload Blog Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) uploadImage(file)
            }}
            className="border border-gray-300 rounded-lg p-2 w-full cursor-pointer"
          />

        </div>

        {/* Image Preview */}

        {image && (
          <div>

            <p className="text-sm text-gray-600 mb-2">
              Image Preview
            </p>

            <img
              src={image}
              className="w-48 h-48 object-cover rounded-lg border shadow-sm"
            />

          </div>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 active:scale-95 transition"
        >
          {editingId ? "Update Post" : "Create Post"}
        </button>

      </form>


      {/* BLOG TABLE */}

      <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-50 text-gray-800 text-sm font-semibold">

            <tr>

              <th className="text-left px-6 py-4">Image</th>
              <th className="text-left px-6 py-4">Title</th>
              <th className="text-left px-6 py-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {posts.map((post) => (

              <tr
                key={post.id}
                className="border-t border-gray-200 hover:bg-green-50 transition"
              >

                <td className="px-6 py-4">

                  <img
                    src={post.image}
                    className="w-16 h-16 object-cover rounded-lg border shadow-sm"
                  />

                </td>

                <td className="px-6 py-4 text-gray-800 font-medium">
                  {post.title}
                </td>

                <td className="px-6 py-4 flex gap-3">

                  <button
                    onClick={() => startEdit(post)}
                    className="px-3 py-1 rounded-md bg-green-100 text-green-700 hover:bg-green-200 active:scale-95 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deletePost(post.id)}
                    className="px-3 py-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200 active:scale-95 transition"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  )
}