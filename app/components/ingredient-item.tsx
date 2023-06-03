import { Database } from '@/database.types'
import DeleteIngredientBtn from './delete-ingredient-btn'
import UpdateIngredientInput from './update-ingredient-input'
import UpdateIngredientCategory from './update-ingredient-category'

export default function IngredientItem(
  ingredient: Database['public']['Tables']['ingredients']['Row']
) {
  return (
    <li className="grid grid-cols-10 gap-x-2 px-8 border-t-slate-500 border-t hover:bg-slate-200">
      <UpdateIngredientCategory
        id={ingredient.id}
        category={ingredient.category}
      />
      <UpdateIngredientInput
        column="title"
        value={ingredient.title}
        id={ingredient.id}
      />
      <UpdateIngredientInput
        column="price"
        value={ingredient.price}
        id={ingredient.id}
      />
      <UpdateIngredientInput
        column="supplier"
        value={ingredient.supplier || undefined}
        id={ingredient.id}
      />
      <UpdateIngredientInput
        column="lot_size"
        value={ingredient.lot_size}
        id={ingredient.id}
      />
      <UpdateIngredientInput
        column="lot_unit"
        value={ingredient.lot_unit}
        id={ingredient.id}
      />
      <UpdateIngredientInput
        column="quantity"
        value={ingredient.quantity}
        id={ingredient.id}
      />
      <UpdateIngredientInput
        column="unit"
        value={ingredient.unit}
        id={ingredient.id}
      />
      <UpdateIngredientInput
        column="salt"
        value={ingredient.salt || undefined}
        id={ingredient.id}
      />
      <DeleteIngredientBtn id={ingredient.id} />
    </li>
  )
}
