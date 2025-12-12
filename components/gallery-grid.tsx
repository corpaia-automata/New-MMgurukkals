"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryImage {
  id: number
  title: string
  image: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelectedId(img.id)}
            className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
          >
            <Image
              src={img.image || "/placeholder.svg"}
              alt={img.title}
              fill
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors flex items-end p-4">
              <h3 className="font-serif font-bold text-white">{img.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedId && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedId(null)}
        >
          <div className="relative max-w-4xl w-full max-h-96">
            <Image
              src={images.find((img) => img.id === selectedId)?.image || ""}
              alt=""
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  )
}
