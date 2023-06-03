import { Suspense } from 'react'
import Spinner from '@/app/components/spinner'
import CreateIngredientCategory from '@/app/components/create-ingredient-category'
import IngredientCategoriesList from '@/app/components/ingredient-categories-list'

export default function IngredientCategoriesPage() {
  return (
    <div className="flex w-full">
      <div className="w-1/2 flex flex-col items-center">
        <p>食材種別設定</p>
        <CreateIngredientCategory />
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <p>食材種別リスト</p>
        <Suspense fallback={<Spinner />}>
          {/* @ts-ignore*/}
          <IngredientCategoriesList />
        </Suspense>
      </div>
    </div>
  )
}
