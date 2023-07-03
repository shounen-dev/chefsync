'use client'
import { useState, useEffect } from 'react'
import { CgSpinner } from 'react-icons/cg'
import LazyImage from './lazy-image'
import supabase from '@/utils/supabase'

export default function FetchRecipeImage({ imagePath }: { imagePath: string }) {
  const [imageUrl, setImageUrl] = useState('')

  async function getImageUrl() {
    const { data } = await supabase.storage
      .from('images')
      .createSignedUrl(imagePath, 60)
    return data?.signedUrl ?? ''
  }

  useEffect(() => {
    getImageUrl().then((url) => setImageUrl(url))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {imageUrl ? (
        <LazyImage imageUrl={imageUrl} />
      ) : (
        <div className="grid h-56 w-64 items-center justify-center">
          <CgSpinner className="origin-center animate-spin text-xl" />
        </div>
      )}
    </>
  )
}
