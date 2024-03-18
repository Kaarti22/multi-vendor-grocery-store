import Sidebar from "@/components/backend/Sidebar";
import Navbar from "@/components/backend/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex gap-1">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <main className=" ml-60 p-8 bg-slate-950 text-slate-50 min-h-screen mt-16">{children}</main>
      </div>
    </div>
  );
};

export default layout;
