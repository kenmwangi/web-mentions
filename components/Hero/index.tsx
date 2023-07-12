import React from "react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="items-center w-full px-5 pt-24 pb-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="w-full lg:max-w-5xl p-10 mx-auto text-center">
          <div>
            <p className="bg-violet-50 text-violet-500 text-xs rounded-full max-w-fit mx-auto px-1.5 text-center">
              work in progress
            </p>
            <p className="my-8 text-2xl lg:text-7xl font-medium tracking-tighter text-black">
              Easy record of Web Mentions
            </p>
            <p className="lg:max-w-3xl mx-auto mt-6 text-base lg:text-lg tracking-tight text-gray-500">
              The webmentions integration to the website that brings more of
              audience and conversation to topics they write about.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
