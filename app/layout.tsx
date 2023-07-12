import { Metadata } from "next";
import "./css/globals.css";
import { Inter, Mulish } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | WebMentions`,
    default: "Home | WebMentions",
  },
  description:
    "Add webmentions integration to a website that shows Twitter interactions with the website.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "WebMentions",
    description:
      "Add webmentions integration to a website that shows Twitter interactions with the website.",
    url: "",
    siteName: "WebMentions",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ken Mwangi",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-b-[1px] border-neutral-50">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
