"use client";
import clsx from "clsx";
import { CreditCard, Plus, ToggleLeft, ToggleRight } from "lucide-react";
import { useState } from "react";

// const cards:number[] = [1,2,3,4,5,6,7,8,9,10]
const cards: number[] = [];

const SettingsPage = () => {
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  return (
    <div>
      <div className="flex items-center mb-4  mx-auto">
        <h3 className="min-inline-3/4 text-xl font-semibold">Payment Method</h3>
        <button className="text-xs lg:text-md p-2 w-80 bg-yellow-500 text-white rounded-2xl flex items-center hover:bg-slate-900 transition-colors gap-2">
          <Plus size={22} />
          Add Payment Method
        </button>
      </div>
      <div className="mt-4">
        <form action="">
          {cards.length === 0 && (
            <div className="flex flex-col items-center gap-4 mt-20">
              <CreditCard size={48} className="text-slate-400" />
              <h3 className="text-lg text-slate-400">
                No Payment Method Added
              </h3>
            </div>
          )}
          {cards.length > 0 &&
            cards.map((card) => (
              <div
                key={card}
                className="bg-slate-700 p-2 rounded-xl flex flex-row justify-between items-center mb-4 px-8"
              >
                <div className="text-white flex items-center gap-4">
                  <input type="radio" name="card" className="" />
                  <p>Visa **** {card}</p>
                  <CreditCard />
                </div>
                <div className="flex gap-8">
                  <button className="text-sm lg:text-md text-blue-300">
                    Edit
                  </button>
                  <button className="text-sm lg:text-md text-red-400">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          {cards.length > 0 && (
            <div className="float-right mb-8">
              <button className="bg-blue-500 text-white p-2 rounded-2xl hover:bg-blue-600 transition-colors">
                Save
              </button>
            </div>
          )}
        </form>
      </div>
      <div className="mx-auto mt-20">
        <h3 className="min-inline-3/4 text-xl font-semibold mb-2">
          2FA Authentication
        </h3>

        <div className="flex items-center mb-4 mx-auto">
          <div className="min-inline-11/12">
            <h3 className="text-lg">
              Turn {isTurnedOn ? "Off" : "On"} 2fa Authentication
            </h3>
            <p className="text-xs text-slate-400">This is for extra security</p>
            <p
              className={clsx(
                "text-xs font-semibold mt-2",
                { "text-green-600": isTurnedOn },
                { "text-red-600": !isTurnedOn },
              )}
            >
              {isTurnedOn ? "Active" : "Deactivated"}
            </p>
          </div>
          <button
            className={clsx(
              "text-xs lg:text-md p-1 text-white rounded-2xl flex items-center  transition-colors gap-4",
              { "bg-slate-700/50 hover:bg-slate-900/80": !isTurnedOn },
              { "bg-green-500 hover:bg-green-600": isTurnedOn },
            )}
            onClick={() => setIsTurnedOn(!isTurnedOn)}
          >
            {isTurnedOn ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
