import Image from "next/image";
import React from "react";

export default function Why() {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <h2 className="text-center text-2xl lg:text-4xl mb-10">
          Why use Web Mentions
        </h2>
        <div className="grid items-center grid-cols-1 gap-12 text-left lg:gap-24 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
            <div className="mx-auto lg:max-w-7xl">
              <ul className="grid grid-cols-1 gap-4 list-none lg:grid-cols-1 lg:gap-6">
                <li>
                  <p className="mt-5 text-lg lg:text-2xl font-medium leading-6 text-violet-400">
                    Easy to Use
                  </p>
                  <div className="mt-2 text-base text-gray-500">
                    Easy to generate web mentions
                  </div>
                </li>
                <li>
                  <p className="mt-5 text-lg lg:text-2xl font-medium leading-6 text-violet-400">
                    Templates for archive
                  </p>
                  <div className="mt-2 text-base text-gray-500">
                    Easy to generate web mentions
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
            <img
              className="object-cover object-center w-full rounded-lg mx-auto bg-gray-300 border lg:ml-auto"
              alt="hero"
              src="/images/why.jpg"
            />
          </div>

          <section className="relative items-center gap-8 m-auto lg:inline-flex md:order-first">
            <div className="mx-auto lg:max-w-7xl">
              <ul className="grid grid-cols-1 gap-4 list-none lg:grid-cols-1 lg:gap-6">
                <li>
                  <p className="mt-5 text-lg lg:text-2xl font-medium leading-6 text-violet-400">
                    Easy to Use
                  </p>
                  <div className="mt-2 text-base text-gray-500">
                    Easy to generate web mentions
                  </div>
                </li>
                <li>
                  <p className="mt-5 text-lg lg:text-2xl font-medium leading-6 text-violet-400">
                    Templates for archive
                  </p>
                  <div className="mt-2 text-base text-gray-500">
                    Easy to generate web mentions
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
