"use client";
import { MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function Navbar() {
  const links = [
    { name: "Films", url: "/movies" },
    { name: "Eposides", url: "/eposides" },
    { name: "Contact", url: "https://yassin.icu" },
  ];
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?name=${encodeURIComponent(query)}`);
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <ul className="md:flex justify-center items-center gap-4 hidden">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className="hover:text-accent transition-colors duration-300"
            >
              <Link href={link.url}>{link.name}</Link>
            </li>
          );
        })}
        <form onSubmit={handleSearch} className="relative w-full max-w-md">
          <input
            type="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-primary/10 backdrop-blur-mdtext-accent rounded-full pl-10 pr-4 py-1 shadow-md focus:outline-none focus:ring-accent border"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
        </form>
      </ul>

      <div className="md:hidden">
        <Button
          variant={"default"}
          className="rounded-full relative z-50"
          onClick={handleToggle}
        >
          <MenuIcon />
        </Button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-primary/60 backdrop-blur-md shadow-md p-6 flex flex-col space-y-6 md:hidden">
            <ul className="flex flex-col justify-start items-start gap-4 pt-10">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                );
              })}
              <form
                onSubmit={handleSearch}
                className="relative w-full max-w-md"
              >
                <input
                  type="search"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-primary/10 backdrop-blur-mdtext-accent rounded-full pl-10 pr-4 py-1 shadow-md focus:outline-none focus:ring-accent border"
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent w-5 h-5" />
              </form>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
