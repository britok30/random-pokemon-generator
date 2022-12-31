import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { Pokemon } from "pokenode-ts";
import Footer from "../components/Footer";
import { getTypeColor } from "../utils";

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
      <Head>
        <title>Random Pok&eacute;mon Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <div className="my-3 rounded-lg flex space-x-10 justify-center items-center px-8 py-3">
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

              <div>
                <h3 className="text-lg font-semibold mb-1">Stats</h3>
                {pokemon.stats.map(({ stat, base_stat }, index) => (
                  <div className="capitalize" key={index}>
                    <span>{stat.name}:</span> {base_stat}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Abilities</h3>
                {pokemon.abilities.map(({ ability }) => (
                  <div className="capitalize">
                    <span>{ability.name}</span>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Moves</h3>
                <div className="max-h-32 overflow-hidden overflow-y-scroll">
                  {pokemon.moves.map(({ move }) => (
                    <div className="capitalize">
                      <span>{move.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1">Types</h3>
                <div className="flex space-x-2">
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
        )}

        <button
          onClick={generatePokemon}
          className="px-4 py-3 rounded-md text-sm mt-3 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          Generate New Pok&eacute;mon
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
