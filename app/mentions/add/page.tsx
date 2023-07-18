"use client";
import React, { Fragment, ReactEventHandler, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

const addMentions = async ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const res = fetch("http://localhost:3000/api/blog", {
    method: "POST",
    body: JSON.stringify({ title, description }),
    //  @ts-ignore
    "Content-Type": "application/json",
  });

  return (await res).json();
};

export default function AddMention() {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (titleRef.current && descriptionRef.current) {
      toast.loading("Sending Mention", { id: "1" });
      await addMentions({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      });
      toast.success("Mentions Created Successfully", { id: "1" });
    }
  };

  return (
    <Fragment>
      <Toaster />
      <div className="max-w-7xl m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <h3 className="text-2xl text-violet-400 font-bold p-3 my-6">
            Create your Web Mention 🚀️
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex  w-full flex-col rounded-xl ring-1 ring-neutral-950/5 transition  sm:p-8"
          >
            <input
              ref={titleRef}
              placeholder="Enter a Title"
              type="text"
              className="rounded-md px-4 py-2 my-2 ring-1 ring-gray-200"
            />
            <textarea
              ref={descriptionRef}
              name=""
              className="rounded-md px-4 py-2 w-full my-2 ring-1 ring-gray-300"
              placeholder="Enter a Mention"
            ></textarea>
            <button
              type="submit"
              className="mt-6 bg-violet-100 text-lg hover:bg-violet-200 transition-colors hover:text-violet-600 text-violet-600 px-4 py-1 font-semibold"
            >
              Add Mention
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
