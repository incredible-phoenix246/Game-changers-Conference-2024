import type { Metadata } from "next";
import { Work_Sans, Roboto } from "next/font/google";
import "../styles/globals.scss";
import { Toaster } from "@/components/ui/toaster";

import StateContextProvider from "@/context/StateCtx";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const currentYear = new Date().getFullYear().toString();

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL as string),
  title: {
    default: "Game Changers for Global impact",
    template: `%s - FORWARD${currentYear}`,
  },
  description:
    "FORWARD is an all-time leadership and life transformational live conference for those desirous of growth, where thier lives will be inspired to greatness",
  openGraph: {
    title: "Game Changers for Global impact",
    description:
      "all-time leadership and life transformational live conference",
    url: process.env.NEXT_PUBLIC_BASEURL,
    siteName: "FORWARD",
    locale: "en_US",
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
    title: "Game Changers for Global impact",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateContextProvider>
        <body className={`${workSans.className}`}>
          {children}
          <Toaster />
        </body>
      </StateContextProvider>
    </html>
  );
}
