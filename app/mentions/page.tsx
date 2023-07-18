import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

interface Mentions {
  id: string;
  title: string;
  description: string;
  date: string;
}

async function fetchMentions() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 10,
    },
  });

  const data = await res.json();
  return data.posts;
}

export default async function Mentions() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/signin");
  }

  const mentions = await fetchMentions();

  return (
    <div>
      <Container>
        <div className="px-4 mt-12">
          <section className="mb-10 grid grid-cols-1 lg:flex gap-y-8 lg:justify-between lg:items-center">
            <div>
              <h2 className="text-2xl text-violet-600 lg:text-4xl font-semibold">
                Mentions
              </h2>
              <p className="mt-4 text-sm text-gray-400">
                Create and manage Mentions{" "}
              </p>
            </div>
            <div>
              <Link
                href="/mentions/add"
                className="flex items-center justify-between max-w-[150px] bg-violet-100 hover:bg-violet-200 hover:text-violet-700 transition-colors font-bold text-lg text-violet-600 py-1.5 px-2"
              >
                <AiOutlinePlus />
                <span>New Mention</span>
              </Link>
            </div>
          </section>
          {/* Mentions List */}
          <section className="border-t border-gray-100">
            {mentions?.length ? (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 my-12">
                {mentions?.map((mention: any) => {
                  const { id, title, description } = mention;
                  return (
                    <article
                      key={id}
                      className="flex w-full flex-col rounded-xl ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8"
                    >
                      <div className="my-4">
                        <blockquote className="font-bold text-violet-400">
                          {new Date(mention.date).toDateString()}
                        </blockquote>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-neutral-950">
                        {title}
                      </h3>
                      <p className="mt-4 text-base text-neutral-600">
                        {description}
                      </p>

                      {/* <div className="flex justify-between items-center mt-8">
                        <Link
                          href={`/mentions/edit/${id}`}
                          className="text-blue-400"
                        >
                          Edit
                        </Link>
                        <Link
                          href={`/mentions/delete/${id}`}
                          className="text-rose-400"
                        >
                          Delete
                        </Link>
                      </div> */}
                    </article>
                  );
                })}
              </div>
            ) : (
              <article className="flex my-12 lg:gap-16 gap-8 w-full items-center flex-col rounded-xl ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <div>
                  <IoDocumentTextOutline
                    size={32}
                    className=" text-violet-500"
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  You don&apos;t have any mentions yet. Start creating web
                  mentions
                </p>
                <div>
                  <Link
                    href="/mentions/add"
                    className="flex items-center justify-between max-w-[150px] bg-violet-100 hover:bg-violet-200 hover:text-violet-700 transition-colors font-bold text-lg text-violet-600 py-1.5 px-2"
                  >
                    <AiOutlinePlus />
                    <span>New Mention</span>
                  </Link>
                </div>
              </article>
            )}
          </section>
        </div>
      </Container>
    </div>
  );
}
