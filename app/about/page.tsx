import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { v4 as uuidv4 } from "uuid";

const links = [
  { id: uuidv4(), title: "Updates", href: "/updates" },
  { id: uuidv4(), title: "Mentions", href: "/mentions" },
  { id: uuidv4(), title: "Team", href: "/team" },
  { id: uuidv4(), title: "Get Started", href: "/" },
];
export const metadata: Metadata = {
  title: "About",
  description:
    "Web Mentions showing integrations of web interactions configured using meta tags ",
};

export default function About() {
  return (
    <div>
      <Container>
        <section className="bg-neutral-50 mt-4 min-h-[75vh]">
          <div className="relative items-center w-full px-5 py-12 mx-auto lg:pt-24 lg:px-32 max-w-7xl md:px-12">
            <div>
              <p className="text-violet-400 tracking-tighter font-medium font-serif lg:text-4xl text-2xl">
                Web Mentions<span className="font-bold">&trade;</span> add best
                social web interactions.
              </p>
              <p className="lg:text-lg tracking-wide leading-8 max-w-5xl mt-8 text-gray-500 text-base">
                The tool connects a website by adding lists of social
                interactions to blog, articles and social interactions.
                Webmentions API is introduced, which allows programmatically
                accessing social interactions from a website&apos;s URL.
                <span className="block mt-3">
                  It provides information about the type of interaction and the
                  person&apos;s profile avatar. The task is to connect the
                  website to Webmentions and display a list of social
                  interactions on blog post pages.
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {links.map((link) => {
                const { id, href, title } = link;
                return (
                  <Link
                    key={id}
                    href={href}
                    className="text-violet-400 bg-violet-50 text-sm px-4 hover:border-violet-400 border hover:text-violet-400 inline-flex items-center py-1 rounded-full"
                  >
                    {title}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
