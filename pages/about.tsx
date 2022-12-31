import type { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { Seo } from "../components/Seo";

const About: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen text-white bg-black flex-col items-center justify-center py-2">
      <Seo />

      <main className="flex w-full flex-1 flex-col items-center justify-center p-10 text-center">
        <button
          onClick={() => router.push("/")}
          className="px-4 py-3 mb-3 rounded-md text-sm mt-3 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          Home
        </button>
        <header>
          <h1 className="text-4xl font-bold">
            About Random Pok&eacute;mon Generator
          </h1>
        </header>
        <div className="flex flex-col text-sm space-y-4 text-left w-1/2 mt-3">
          <p>
            Are you a Pok&eacute;mon fan looking for a fun and easy way to
            discover new Pok&eacute;mon? Look no further! Our web app allows you
            to generate random Pok&eacute;mon from the franchise's extensive
            roster with just a single click.
          </p>
          <p>
            Whether you're a seasoned trainer or new to the world of
            Pok&eacute;mon, our tool is perfect for discovering new creatures
            and expanding your Pokedex. Simply click the "Generate" button and
            you'll be presented with a new, randomly selected Pok&eacute;mon.
            You can generate as many Pok&eacute;mon as you'd like, so the
            possibilities are endless!
          </p>
          <p>
            In addition to the random generator feature, we also provide
            information on each Pok&eacute;mon generated, including their type,
            abilities, and other stats. This makes it easy for you to learn more
            about your favorite Pok&eacute;mon and discover new ones that you
            might not have known about before.
          </p>
          <p>
            So why wait? Give Random Pok&eacute;mon Generator a try today and
            let the adventure begin!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
