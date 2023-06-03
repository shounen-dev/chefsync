import { Suspense } from 'react'
import Spinner from '@/app/components/spinner'
import CreateRecipeIngredients from '@/app/components/create-recipe-ingredients'
import CreateRecipeEditIngredients from '@/app/components/create-recipe-edit-ingredients'
import CreateRecipeEditProfile from '@/app/components/create-recipe-edit-profile'

export default function CreateRecipePage() {
  return (
    <>
      <section className="w-1/4 flex flex-col items-center">
        <p>食材選択</p>
        <Suspense fallback={<Spinner />}>
          {/* @ts-ignore*/}
          <CreateRecipeIngredients />
        </Suspense>
      </section>
      <section className="w-3/4 flex flex-col items-center">
        <p>レシピ登録</p>
        <div className="w-full">
          <CreateRecipeEditProfile />
          <CreateRecipeEditIngredients />
        </div>
      </section>
    </>
  )
}
