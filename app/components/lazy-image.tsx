'use client'
import Image from 'next/image'
export default function LazyImage({ imageUrl }: { imageUrl: string }) {
  return (
    <Image
      alt=""
      loading="lazy"
      fill
      src={imageUrl}
      className="object-cover object-center opacity-0 transition-opacity duration-[100ms]"
      onLoadingComplete={(image) => image.classList.remove('opacity-0')}
    />
  )
}
