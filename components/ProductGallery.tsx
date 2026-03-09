"use client"

import { useState } from "react"

type Props = {
  images: string[]
}

export default function ProductGallery({ images }: Props) {

  const [active, setActive] = useState(images[0])

  return (
    <div>

      {/* Main Image */}

      <img
        src={active}
        className="w-full h-[420px] object-cover rounded-lg mb-4"
      />

      {/* Thumbnails */}

      <div className="flex gap-3">

        {images.map((img, index) => (

          <img
            key={index}
            src={img}
            onClick={() => setActive(img)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border 
              ${active === img ? "border-green-600" : "border-gray-200"}
            `}
          />

        ))}

      </div>

    </div>
  )
}