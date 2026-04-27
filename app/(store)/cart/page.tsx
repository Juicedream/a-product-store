
import CartForm from "@/app/ui/cart/cartForm";
import CartItem from "@/app/ui/cart/cartItem";



const cartItems = [1,2,3,4,5,6,7,8,9,10];

export default function CartPage() {
  return (
    <div className="my-22 grid grid-flow-col grid-rows-2 gap-4 ">
      <div className="row-span-3 col-span-22 px-4 py-8 rounded-sm relative">
        <div className="flex flex-col space-y-4 ">
          <div>
            <h2 className="font-poppins font-bold text-2xl">Cart Page</h2>
            <p className="text-sm text-slate-400">
              See all your products here before you checkout
            </p>
          </div>
          <div className="w-full py-2 h-92 rounded-sm overflow-auto overscroll-none space-y-4">
            {/* cart items */}
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem} value={cartItem}/>
            ))}
          </div>
          <div className="w-full flex flex-col items-end space-y-4 absolute bottom-4 right-4">
            <div className="flex gap-2 items-center">
              <p>Discount applied:</p>
              <span className="text-lg font-light text-green-700">
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
              <span className="text-2xl font-light">₦ 4,500</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-3 px-4 py-8 bg-white rounded-sm shadow-md shadow-black/40">
        <CartForm />
      </div>
    </div>
  );
}

