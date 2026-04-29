import { ShoppingCartIcon } from "lucide-react";

export default function CartForm() {
  return (
    <div className="flex flex-col p-4 mx-auto">
      <div className="lg:text-center">
        <h3 className="font-poppins font-bold text-2xl">Your Information</h3>
        <p className="text-sm text-slate-400">
          Fill the information below to checkout
        </p>
      </div>
      <div>
        <form className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-1 lg:justify-items-center p-2 mx-auto">
          <div className="flex flex-col justify-between items-start">
            <label
              htmlFor="first-name"
              className="text-sm text-slate-400 font-lato"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first-name"
              placeholder="John"
              className="rounded-md active:ring-blue-400 p-3 border border-slate-400"
            />
          </div>
          <div className="flex flex-col justify-between items-start">
            <label
              htmlFor="last-name"
              className="text-sm text-slate-400 font-lato"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="last-name"
              placeholder="Doe"
              className="rounded-md active:ring-blue-400 p-3 border border-slate-400"
            />
          </div>
          <div className="flex flex-col justify-between items-start">
            <label htmlFor="email" className="text-sm text-slate-400 font-lato">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
              className="rounded-md active:ring-blue-400 p-3 border border-slate-400"
            />
          </div>
          <div className="flex flex-col justify-between items-start">
            <label htmlFor="phone" className="text-sm text-slate-400 font-lato">
              Phone Number
            </label>
            <input
              type="text"
              name="phone_number"
              id="phone"
              placeholder="11223344"
              className="rounded-md active:ring-blue-400 p-3 border border-slate-400"
            />
          </div>
          <div className="flex flex-col justify-between items-start">
            <label
              htmlFor="address"
              className="text-sm text-slate-400 font-lato"
            >
              Delivery Address
            </label>
            <textarea
              name="address"
              id="address"
              className="border border-slate-400 p-2 font-lato"
            />
          </div>
          <div>
            <label
              htmlFor="choice"
              className="text-sm text-slate-400 font-lato"
            >
              Instant Delivery?
            </label>
            <div className="flex items-center gap-x-4">
              <input type="radio" name="choice" id="yes-choice" />{" "}
              <label
                htmlFor="yes-choice"
                className="text-sm text-white font-lato"
              >
                Yes
              </label>
              <input type="radio" name="choice" id="no-choice" />{" "}
              <label
                htmlFor="no-choice"
                className="text-sm text-white font-lato"
              >
                No
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-between items-start space-y-2">
            <label
              htmlFor="discount"
              className="text-sm text-slate-400 font-lato"
            >
              Discount Code (optional)
            </label>
            <input
              type="text"
              name="discount"
              id="discount"
              placeholder=""
              className="rounded-md active:ring-blue-400 p-3 border border-slate-400 w-full"
            />
            <button className="p-4 lg:mx-auto bg-slate-800 hover:bg-slate-600 hover:cursor-pointer text-white rounded-xl">
              Apply
            </button>
          </div>
        </form>
        <button className="p-4 bg-blue-600 text-lg lg:mx-auto mt-4 text-white font-lato rounded-md hover:bg-blue-500 hover:cursor-pointer flex items-center justify-center gap-4">
          Checkout {" "} <ShoppingCartIcon color="white"/>
        </button>
      </div>
    </div>
  );
}
