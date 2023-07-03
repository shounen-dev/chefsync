import FetchRecipeImage from './fetch-recipe-image'

type Props = {
  id: string
  created_at: string
  title: string
  price: number
  image_path: string
  people: number
  tags: string[]
}

export default function RecipeListItem(props: Props) {
  const { image_path, people, price, title, tags } = props

  return (
    <div className="m-4 flex h-min w-64 flex-col rounded-b shadow-lg">
      <div className="relative h-48 w-64">
        {/* @ts-ignore */}
        <FetchRecipeImage imagePath={image_path} />
      </div>
      <div className="flex min-h-[192px] w-64 flex-col justify-evenly gap-4 rounded-b p-4 text-sm">
        <div className="flex flex-wrap text-slate-500">
          {tags.map((i, index) => (
            <p className="mx-2" key={index}>
              #{i}
            </p>
          ))}
        </div>
        <p className="text-center font-bold">{title}</p>
        <div className="flex flex-row justify-evenly">
          <p className="text-center">原価：{price}円</p>
          <p className="text-center">{people}人前のレシピ</p>
        </div>
      </div>
    </div>
  )
}
