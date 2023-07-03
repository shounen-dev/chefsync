import RecipeListItem from '@/app/components/recipe-list-item'
import RecipesFetchData from '@/app/components/recipes-fetch-data'
import Link from 'next/link'

export default async function RecipeList() {
  const recipes = await RecipesFetchData()
  return (
    <ul className="flex flex-wrap">
      {recipes.map((i) => (
        <li key={i.id}>
          <Link prefetch={false} href={`/recipes/${i.id}`}>
            <RecipeListItem {...i} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
