import { ShoppingCart } from "lucide-react";
import React from "react";

const SmallCard = ({ data }) => {
  const item = {
    title: data.title,
    sales: data.sales,
    iconbg: data.iconbg,
    icon: data.icon,
  }

  return (
    <div className="rounded-lg shadow-lg bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${item.iconbg} rounded-full items-center flex justify-center`}
        >
          <item.icon/>
        </div>
        <div>
          <p>{item.title}</p>
          <h3 className="text-2xl font-bold">{item.sales}</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
