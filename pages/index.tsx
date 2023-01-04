import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { Pokemon } from "pokenode-ts";
import Footer from "../components/Footer";
import { getTypeColor } from "../utils";
import { Seo } from "../components/Seo";
import { NextSeo } from "next-seo";

const Home: NextPage<{ data: Pokemon }> = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    generatePokemon();
  }, []);

  const generatePokemon = async () => {
    const randomNum = () => Math.floor(Math.random() * 905 + 1);
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNum()}`
    );
    setPokemon(pokemon.data as Pokemon);
  };

  return (
    <div className="flex min-h-screen text-white bg-black flex-col items-center justify-center py-2">
      <NextSeo
        title="Random Pokémon Generator"
        description="Looking for a fun way to discover new Pokémon? Try the Random Pokémon Generator! With just a click of a button, you can generate a random Pokémon from the entire Pokédex. Whether you're a hardcore trainer or a casual fan, the Random Pokémon Generator is sure to provide endless entertainment. Give it a try today!"
        canonical="https://randompokemongenerator.dev"
        openGraph={{
          url: "https://www.randompokemongenerator.dev",
          title: "Random Pokémon Generator",
          description:
            "Looking for a fun way to discover new Pokémon? Try the Random Pokémon Generator! With just a click of a button, you can generate a random Pokémon from the entire Pokédex. Whether you're a hardcore trainer or a casual fan, the Random Pokémon Generator is sure to provide endless entertainment. Give it a try today!",
          images: [
            {
              url: "https://randompokemongenerator.dev/pokemon.png",
            },
          ],
          siteName: "Random Pokémon Generator",
        }}
        twitter={{
          handle: "@britoszn",
          site: "@britoszn",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "random pokemon generator, pokemon randomizer, random pokemon, pokemon generator, random pokemon picker, pokemon random",
          },
        ]}
      />

      <main className="flex w-full flex-col items-center p-10 justify-center text-center">
        <header>
          <h1 className="text-4xl mb-2 md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            Random Pok&eacute;mon Generator
          </h1>
          <p className="font-extrabold text-transparent text-xs bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Regions included: Kanto - Johto - Hoenn - Sinnoh - Unova - Kalos -
            Alola - Galar/Hisui
          </p>
        </header>

        {pokemon && (
          <div className="my-3 rounded-lg flex space-x-10 justify-center items-center px-6 py-3">
            <Image
              src={pokemon.sprites.front_default || ""}
              width={100}
              height={100}
              alt={pokemon.name}
            />
            <div className="flex flex-col space-y-3 text-sm text-left">
              <div className="flex flex-col">
                <span className="capitalize text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
                  {pokemon.name}
                </span>
                <span>Index: #{pokemon.id}</span>
              </div>
              <div className="flex flex-col space-y-5 md:flex-row md:space-x-5">
                <div>
                  <h3 className="text-lg font-semibold">Stats</h3>
                  {pokemon.stats.map(({ stat, base_stat }, index) => (
                    <div className="capitalize" key={index}>
                      <span>{stat.name}:</span> {base_stat}
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Abilities</h3>
                  {pokemon.abilities.map(({ ability }, index) => (
                    <div className="capitalize" key={index}>
                      <span>{ability.name}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Moves</h3>
                  <div className="max-h-[12rem] w-[10rem] overflow-hidden overflow-y-scroll border p-2 scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-700">
                    {pokemon.moves.map(({ move }, index) => (
                      <div className="capitalize" key={index}>
                        <span>{move.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Types</h3>
                  <div className="flex flex-col space-y-2">
                    {pokemon.types.map(({ type }, index) => (
                      <div
                        key={index}
                        className="capitalize rounded-lg p-2 w-20"
                        style={{
                          backgroundColor: getTypeColor(type.name),
                        }}
                      >
                        <span>{type.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={generatePokemon}
          className="px-4 py-3 rounded-md text-sm mt-8 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          Generate New Pok&eacute;mon
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
