import React from "react";
import Link from "next/link";
import { BiNetworkChart } from "react-icons/bi";
export default function Logo() {
  return (
    <div className="">
      {/* <BiNetworkChart
        size={32}
        className="text-white bg-violet-300 rounded-full"
      /> */}
      <h2 className="font-bold text-2xl text-violet-400">
        <Link href="/">WB.</Link>
      </h2>
    </div>
  );
}
