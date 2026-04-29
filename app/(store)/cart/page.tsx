
import CartForm from "@/app/ui/cart/cartForm";
import CartItem from "@/app/ui/cart/cartItem";



const cartItems: number[] = [1,2,3,4,5,6,7,8,9,10];
// const cartItems: number[] = [] ;

export default function CartPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 mx-auto px-4 lg:max-w-7xl">
      <div className="px-4 py-8 rounded-sm relative bg-slate-700/70 shadow shadow-black/60">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <h2 className="font-poppins font-bold lg:text-3xl text-4xl text-white">Cart Page</h2>
            <p className="text-sm text-slate-400">
              See all your products here before you checkout
            </p>
          </div>
          <div className="w-full py-2 h-92 rounded-sm overflow-auto overscroll-none space-y-4 mb-34">
            {/* cart items */}
            {cartItems.length === 0 ?(
              <div className="w-full py-4 flex flex-col items-center justify-center gap-4">
                <p className="text-xl font-lato">No Items in your cart</p>
                <button className="px-4 py-2 uppercase bg-blue-400 hover:bg-blue-500 hover:cursor-pointer rounded-md text-white">Go to Store</button>
              </div>
            ): cartItems.map((cartItem) => (
                <CartItem key={cartItem} value={cartItem}/>
            )) }
            
            
          </div>
          <div className="w-full flex flex-col items-end space-y-4 absolute bottom-4 right-4 text-white">
            <div className="flex gap-2 items-center">
              <p>Discount applied:</p>
              <span className="text-lg font-light text-red-400">
                {" "}
                -₦ 2,000
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <p>Subtotal:</p>
              <span className="text-lg font-light"> ₦ 6,500</span>
            </div>
            <div className="flex gap-2 items-center">
              {/* total */}
              <p className="text-2xl font-semibold font-lato">Total:</p>
              <span className="text-2xl font-light text-green-500">₦ 4,500</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-slate-700/60 rounded-sm shadow-md shadow-black/40 text-white">
        <CartForm />
      </div>
    </div>
  );
}

