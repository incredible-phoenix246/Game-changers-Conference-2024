import React from "react";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
