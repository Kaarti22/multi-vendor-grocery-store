import React from "react";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

const SmallCards = () => {
  const orderStatus = [
    {
      title: "Today's Orders",
      sales: 500,
      iconbg: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      sales: 100,
      iconbg: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Orders Processing",
      sales: 200,
      iconbg: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Orders Delivered",
      sales: 300,
      iconbg: "bg-purple-600",
      icon: CheckCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i}/>;
      })}
    </div>
  );
};

export default SmallCards;
