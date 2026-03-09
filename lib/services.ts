import { supabase } from "./supabase"
import { Product } from "@/types/product"
import { BlogPost } from "@/types/blog"

/* ---------------- PRODUCTS ---------------- */

export async function getProducts(): Promise<Product[]> {

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data as Product[]
}


/* ---------------- SINGLE PRODUCT ---------------- */

export async function getProductById(id: number): Promise<Product | null> {

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching product:", error)
    return null
  }

  return data as Product
}


/* ---------------- BLOG POSTS ---------------- */

export async function getBlogs(): Promise<BlogPost[]> {

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }

  return data as BlogPost[]
}


/* ---------------- SINGLE BLOG ---------------- */

export async function getBlogById(id: number): Promise<BlogPost | null> {

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching blog post:", error)
    return null
  }

  return data as BlogPost
}