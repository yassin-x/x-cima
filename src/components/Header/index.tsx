"use client";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  const [scrollY, setScrollY] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`p-4 z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrollY >= 50
          ? "bg-primary/10 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-white relative z-50">
            X Cima
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
