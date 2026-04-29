import { Footprints, HatGlasses, Shirt, Watch } from "lucide-react"

const categories = [
  {id: 1, name: "Shirts", icon: <Shirt />},
  {id: 2, name: "Hats", icon: <HatGlasses />},
  {id: 3, name: "Shoes", icon: <Footprints />},
  {id: 4, name: "Watches", icon: <Watch />},
]

export default function CategoryList() {
  return (
    <div className="py-2 max-w-6xl md:max-w-7xl lg:w-full bg-white bg-linear-to-bl from-white to-blue-400 mx-auto flex justify-around mb-4">
      {
        categories.map((category) => (
          <p key={category.id} className="inline-flex gap-2">
            <span className="text-blue-400 text-center">{category.icon}</span>
            {category.name}
            </p>
        ))
       }
    </div>
  )
}