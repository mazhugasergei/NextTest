import Search from "@/app/components/Search"
import Items from "@/app/components/Shop/Items"
import Nav from "@/app/components/Shop/Nav"
import ShopHeading from "@/app/components/Shop/ShopHeading"

const items = [
  {
    title: "T-Shirt",
    categories: ["top", "men"],
    color: ["Gray", "White", "Black"],
    size: ["S", "M", "L"],
    price: [7.99, 8.99, 9.99],
  },
  {
    title: "Polo Shirt",
    categories: ["top", "men"],
    color: ["Blue", "Red", "Green"],
    size: ["M", "L", "XL"],
    price: [14.99, 15.99, 16.99],
  },
  {
    title: "Jeans",
    categories: ["bottom", "men"],
    color: ["Indigo", "Black", "Gray"],
    size: ["30x32", "32x32", "34x32"],
    price: [29.99, 31.99, 33.99],
  },
  {
    title: "Chinos",
    categories: ["bottom", "men"],
    color: ["Khaki", "Navy", "Brown"],
    size: ["30x30", "32x30", "34x30"],
    price: [24.99, 25.99, 26.99],
  },
  {
    title: "Blouse",
    categories: ["top", "women"],
    color: ["White", "Pink", "Purple"],
    size: ["XS", "S", "M"],
    price: [19.99, 20.99, 21.99],
  },
  {
    title: "Tank Top",
    categories: ["top", "women"],
    color: ["Black", "Gray", "Blue"],
    size: ["S", "M", "L"],
    price: [12.99, 13.99, 14.99],
  },
  {
    title: "Skinny Jeans",
    categories: ["bottom", "women"],
    color: ["Black", "Blue", "Gray"],
    size: ["25x30", "27x30", "29x30"],
    price: [39.99, 41.99, 43.99],
  },
  {
    title: "Skirt",
    categories: ["bottom", "women"],
    color: ["Navy", "Brown", "Green"],
    size: ["S", "M", "L"],
    price: [29.99, 31.99, 33.99],
  },
  {
    title: "Hoodie",
    categories: ["top", "men"],
    color: ["Black", "Gray", "Navy"],
    size: ["S", "M", "L"],
    price: [24.99, 26.99, 28.99],
  },
  {
    title: "Sweatshirt",
    categories: ["top", "men"],
    color: ["Red", "Green", "Blue"],
    size: ["M", "L", "XL"],
    price: [19.99, 21.99, 23.99],
  },
  {
    title: "Cargo Shorts",
    categories: ["bottom", "men"],
    color: ["Khaki", "Army Green", "Black"],
    size: ["30", "32", "34"],
    price: [34.99, 36.99, 38.99],
  },
  {
    title: "Sports Shorts",
    categories: ["bottom", "men"],
    color: ["Blue", "Black", "Gray"],
    size: ["S", "M", "L"],
    price: [14.99, 16.99, 18.99],
  },
  {
    title: "Blazer",
    categories: ["top", "women"],
    color: ["Black", "Navy", "Gray"],
    size: ["S", "M", "L"],
    price: [49.99, 51.99, 53.99],
  },
  {
    title: "Cardigan",
    categories: ["top", "women"],
    color: ["Pink", "Beige", "White"],
    size: ["XS", "S", "M"],
    price: [39.99, 41.99, 43.99],
  },
  {
    title: "Pleated Skirt",
    categories: ["bottom", "women"],
    color: ["Black", "Navy", "Gray"],
    size: ["S", "M", "L"],
    price: [29.99, 31.99, 33.99],
  },
  {
    title: "Maxi Dress",
    categories: ["top", "women"],
    color: ["Blue", "Red", "Green"],
    size: ["S", "M", "L"],
    price: [59.99, 61.99, 63.99],
  },
]

export default async function Page() {
  return (
    <div className="h-full grid grid-rows-[auto_auto_1fr]">
      {/* heading */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <ShopHeading {...{ items }} />
        <Search />
      </div>
      <Nav {...{ items }} />
      <Items {...{ items }} />
    </div>
  )
}
