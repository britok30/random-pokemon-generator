import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex text-xs flex-col mt-auto h-24 w-full items-center justify-center">
      <div className="flex space-x-5 mb-2">
        <button className="hover:underline">
          <Link href="/">Home</Link>
        </button>
        <button className="hover:underline">
          <Link href="/about">About</Link>
        </button>
        <button className="hover:underline">
          <Link href="/faq">FAQ</Link>
        </button>
        <button className="hover:underline">
          <Link href="/privacy">Privacy</Link>
        </button>
      </div>
      <div>
        Pok&eacute;mon &copy; Nintendo {new Date().getFullYear()} | Website &copy;{" "}
        <a className="underline" href="https://kelvinbrito.dev">
          Kelvin Brito
        </a>
      </div>
    </footer>
  );
};

export default Footer;
