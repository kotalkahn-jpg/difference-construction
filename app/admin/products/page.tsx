"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function AdminProducts() {

  const [products, setProducts] = useState<Product[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  async function fetchProducts() {

    const { data } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true })

    if (data) setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

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

  function handlePriceChange(value: string) {

    const raw = value.replace(/,/g, "")

    if (!isNaN(Number(raw))) {
      setPrice(Number(raw).toLocaleString())
    } else {
      setPrice("")
    }
  }

  async function addProduct(e: React.FormEvent) {

    e.preventDefault()

    const { error } = await supabase
      .from("products")
      .insert([
        {
          name,
          price: Number(price.replace(/,/g, "")),
          description,
          image
        }
      ])

    if (error) {
      alert("Error adding product")
      return
    }

    resetForm()
    fetchProducts()
  }

  async function deleteProduct(id: number) {

    const confirmDelete = confirm("Delete this product?")
    if (!confirmDelete) return

    await supabase
      .from("products")
      .delete()
      .eq("id", id)

    fetchProducts()
  }

  function startEdit(product: Product) {

    setEditingId(product.id)

    setName(product.name)
    setPrice(Number(product.price).toLocaleString())
    setDescription(product.description)
    setImage(product.image)
  }

  async function updateProduct(e: React.FormEvent) {

    e.preventDefault()

    if (!editingId) return

    await supabase
      .from("products")
      .update({
        name,
        price: Number(price.replace(/,/g, "")),
        description,
        image
      })
      .eq("id", editingId)

    resetForm()
    fetchProducts()
  }

  function resetForm() {

    setEditingId(null)
    setName("")
    setPrice("")
    setDescription("")
    setImage("")
  }

  return (
    <main className="max-w-7xl mx-auto py-10 px-6">

      <h1 className="text-3xl font-bold text-gray-900 mb-10">
        Products
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* FORM COLUMN */}

        <div className="lg:col-span-1">

          <form
            onSubmit={editingId ? updateProduct : addProduct}
            className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
          >

            <input
              placeholder="Product Name"
              className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="MWK 0.00"
              className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={price}
              onChange={(e) => handlePriceChange(e.target.value)}
            />

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Upload Product Image
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

            {image && (
              <div>

                <p className="text-sm text-gray-600 mb-2">
                  Image Preview
                </p>

                <img
                  src={image}
                  className="w-40 h-40 object-cover rounded-lg border shadow-sm"
                />

              </div>
            )}

            <textarea
              placeholder="Description"
              rows={4}
              className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 active:scale-95 transition"
            >
              {editingId ? "Update Product" : "Add Product"}
            </button>

          </form>

        </div>

        {/* TABLE COLUMN */}

        <div className="lg:col-span-2">

          <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden">

            <table className="w-full">

              <thead className="bg-green-50 text-gray-800 text-sm font-semibold">

                <tr>

                  <th className="text-left px-6 py-4">Image</th>
                  <th className="text-left px-6 py-4">Name</th>
                  <th className="text-left px-6 py-4">Price</th>
                  <th className="text-left px-6 py-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {products.map((product) => (

                  <tr
                    key={product.id}
                    className="border-t border-gray-200 hover:bg-green-50 transition"
                  >

                    <td className="px-6 py-4">

                      <img
                        src={product.image}
                        className="w-16 h-16 object-cover rounded-lg border shadow-sm"
                      />

                    </td>

                    <td className="px-6 py-4 text-gray-800 font-medium">
                      {product.name}
                    </td>

                    <td className="px-6 py-4 text-gray-800">
                      MWK {Number(product.price).toLocaleString()}
                    </td>

                    <td className="px-6 py-4 flex gap-3">

                      <button
                        onClick={() => startEdit(product)}
                        className="px-3 py-1 rounded-md bg-green-100 text-green-700 hover:bg-green-200 active:scale-95 transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProduct(product.id)}
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

        </div>

      </div>

    </main>
  )
}