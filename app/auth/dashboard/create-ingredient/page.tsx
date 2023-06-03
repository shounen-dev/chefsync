import { Suspense } from 'react'
import Spinner from '@/app/components/spinner'
import CreateIngredient from '@/app/components/create-ingredient'
import IngredientsList from '@/app/components/ingredients-list'

export default function CreateIngredientPage() {
  return (
    <>
      <section className="w-1/4 flex flex-col items-center">
        <p>食材登録</p>
        <Suspense fallback={<Spinner />}>
          <CreateIngredient />
        </Suspense>
      </section>
      <section className="w-3/4 flex flex-col items-center">
        <p>食材リスト</p>
        <ul className="w-full">
          <li className="grid grid-cols-10 gap-x-2 px-8 border-t-slate-500 border-t text-slate-500">
            <p>種別</p>
            <p>食材名</p>
            <p>原価</p>
            <p>仕入先</p>
            <p>調達分量</p>
            <p>調達単位</p>
            <p>計量分量</p>
            <p>計量単位</p>
            <p>塩分濃度％</p>
          </li>
          <Suspense fallback={<Spinner />}>
            {/* @ts-ignore*/}
            <IngredientsList />
          </Suspense>
        </ul>
      </section>
    </>
  )
}
