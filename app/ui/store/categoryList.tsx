import { Footprints, HatGlasses, Shirt, Watch } from "lucide-react"

const categories = [
  {id: 1, name: "Shirts", icon: <Shirt />},
  {id: 2, name: "Hats", icon: <HatGlasses />},
  {id: 3, name: "Shoes", icon: <Footprints />},
  {id: 4, name: "Watches", icon: <Watch />},
]

export default function CategoryList() {
  return (
    <div className="py-2 w-full bg-white flex flex-row items-center space-x-20 justify-center">
      {
        categories.map((category) => (
          <p key={category.id} className="flex flex-col justify-center items-center gap-2">
            <span className="text-blue-400">{category.icon}</span>
            {category.name}
            </p>
        ))
       }
    </div>
  )
}