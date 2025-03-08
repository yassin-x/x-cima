import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 bg-primary/10">
      <div className="py-4">
        <p className="text-accent text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            className="text-primary font-semibold"
            href="https://yassin.icu"
            target="_blank"
          >
            Yassin Ibrahim
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
