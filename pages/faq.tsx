import type { NextPage } from "next";
import React from "react";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const About: NextPage = () => {
  const router = useRouter();
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

      <main className="flex w-full flex-1 flex-col items-center justify-center p-10 text-center">
        <button
          onClick={() => router.push("/")}
          className="px-4 py-3 mb-3 rounded-md text-sm mt-3 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          Home
        </button>
        <header>
          <h1 className="text-4xl font-bold">FAQ</h1>
        </header>
        <div className="flex flex-col text-sm space-y-4 text-left w-1/2 mt-3">
          <h2 className="font-bold text-lg">Q: What is Pok&eacute;mon?</h2>
          <p>
            Pok&eacute;mon is a media franchise owned by The Pok&eacute;mon
            Company, a Japanese consortium between Nintendo, Game Freak, and
            Creatures. The franchise was created by Satoshi Tajiri in 1995, and
            is centered on fictional creatures called "Pok&eacute;mon", which
            humans, known as Pok&eacute;mon Trainers, catch and train to battle
            each other for sport. The franchise has since become one of the most
            successful and lucrative media franchises in the world, with over
            1000 Pok&eacute;mon species, countless video games, trading card
            games, and other merchandise.
          </p>
          <h2 className="font-bold text-lg">
            Q: What are the different Pok&eacute;mon games?
          </h2>
          <p>
            There are many Pok&eacute;mon games available, including
            role-playing games (RPGs), fighting games, and puzzle games. The
            main series of Pok&eacute;mon RPGs consists of:
          </p>
          <ul className="list-disc space-y-2">
            <li>
              Pok&eacute;mon Red and Blue: The original Pok&eacute;mon games,
              released for the Game Boy in 1996.
            </li>
            <li>
              Pok&eacute;mon Gold and Silver: The second generation of
              Pok&eacute;mon games, released for the Game Boy Color in 1999.
            </li>
            <li>
              Pok&eacute;mon Ruby and Sapphire: The third generation of
              Pok&eacute;mon games, released for the Game Boy Advance in 2002.
            </li>
            <li>
              Pok&eacute;mon FireRed and LeafGreen: Remakes of Pok&eacute;mon
              Red and Blue, released for the Game Boy Advance in 2004.
            </li>
            <li>
              Pok&eacute;mon Diamond and Pearl: The fourth generation of
              Pok&eacute;mon games, released for the Nintendo DS in 2006.
            </li>
            <li>
              Pok&eacute;mon Platinum: An enhanced version of Pok&eacute;mon
              Diamond and Pearl, released for the Nintendo DS in 2009.
            </li>
            <li>
              Pok&eacute;mon Black and White: The fifth generation of
              Pok&eacute;mon games, released for the Nintendo DS in 2010.
            </li>
            <li>
              Pok&eacute;mon X and Y: The sixth generation of Pok&eacute;mon
              games, released for the Nintendo 3DS in 2013.
            </li>
            <li>
              Pok&eacute;mon Sun and Moon: The seventh generation of
              Pok&eacute;mon games, released for the Nintendo 3DS in 2016.
            </li>
            <li>
              Pok&eacute;mon Sword and Shield: The eighth generation of
              Pok&eacute;mon games, released for the Nintendo Switch in 2019.
            </li>
            <li>
              Pok&eacute;mon Scarlet and Violet: The ninth generation of
              Pok&eacute;mon games, released for the Nintendo Switch in 2022.
            </li>
          </ul>
          <h2 className="font-bold text-lg">
            Q: How do you play Pok&eacute;mon?
          </h2>
          <p>
            In the main series of Pok&eacute;mon RPGs, players control a
            Pok&eacute;mon Trainer who travels through a region catching and
            training Pok&eacute;mon to battle other trainers and become the
            champion. Players can also collect and trade Pok&eacute;mon with
            other trainers, and participate in various mini-games and side
            quests. The goal of the game is to collect all of the Pok&eacute;mon
            in the region and become the ultimate Pok&eacute;mon Master.
          </p>
          <h2 className="font-bold text-lg">
            Q: What are the different types of Pok&eacute;mon?
          </h2>
          <p>
            Pok&eacute;mon are divided into different types, such as Fire,
            Water, Grass, and Electric. Each type has its own strengths and
            weaknesses, and different types are effective against different
            types. For example, Water-type Pok&eacute;mon are strong against
            Fire-type Pok&eacute;mon, but weak against Electric-type
            Pok&eacute;mon. There are a total of 18 different Pok&eacute;mon
            types.
          </p>
          <h2 className="font-bold text-lg">
            Q: How do you catch a Pok&eacute;mon?
          </h2>
          <p>
            To catch a Pok&eacute;mon, players use a special item called a Poké
            Ball. To throw a Poké Ball, players must aim it at a wild
            Pok&eacute;mon and release it. If the Pok&eacute;mon is successfully
            caught, it will be added to the player's party. Players can also
            catch Pok&eacute;mon by defeating them in battle and then using a
            Pok&eacute; Ball to capture them.
          </p>
          <h2 className="font-bold text-lg">
            Q: How do you evolve Pok&eacute;mon?
          </h2>
          <p>
            Many Pok&eacute;mon species can evolve into stronger and more
            powerful forms. There are several different ways that a
            Pok&eacute;mon can evolve, such as reaching a certain level, using a
            special item, or learning a certain move. When a Pok&eacute;mon
            evolves, it becomes a new species with new abilities and a higher
            level cap.
          </p>
          <h2 className="font-bold text-lg">
            Q: How do you battle in Pok&eacute;mon?
          </h2>
          <p>
            In Pok&eacute;mon battles, players select a team of Pok&eacute;mon
            to use in battle against another trainer's Pok&eacute;mon. Each
            Pok&eacute;mon has its own set of moves that it can use in battle,
            and players can choose which moves to use each.
          </p>
          <h2 className="font-bold text-lg">
            Q: How does the random Pok&eacute;mon generator work?
          </h2>
          <p>
            The random Pok&eacute;mon generator works by selecting a
            Pok&eacute;mon at random from the entire pool of known
            Pok&eacute;mon species. When the generator is used, it will display
            the name and image of the randomly selected Pok&eacute;mon,
            abilities, as well as details about its type and other
            characteristics.
          </p>
          <h2 className="font-bold text-lg">
            Q: How can I use the random Pok&eacute;mon generator?
          </h2>
          <p>
            To use the random Pok&eacute;mon generator, simply press the button
            that generates the random Pok&eacute;mon. Each time the button is
            pressed, a new Pok&eacute;mon will be selected at random and its
            information will be displayed.
          </p>
          <h2 className="font-bold text-lg">
            Q: Is the random Pok&eacute;mon generator fair?
          </h2>
          <p>
            The random Pok&eacute;mon generator uses a random number generator
            (RNG) to select the Pok&eacute;mon at random, so each Pok&eacute;mon
            has an equal chance of being selected. As long as the RNG is working
            properly, the generator should be fair and unbiased.
          </p>
          <h2 className="font-bold text-lg">
            Q: Can I use the random Pok&eacute;mon generator for competitive
            play?
          </h2>
          <p>
            While the random Pok&eacute;mon generator can be a fun tool for
            learning about different Pok&eacute;mon or for generating ideas for
            team building, it is not recommended for use in competitive play. In
            competitive play, players typically choose their Pok&eacute;mon and
            movesets carefully based on strategy and synergy with their team,
            rather than relying on chance.
          </p>
          <h2 className="font-bold text-lg">Q: Is the app free to use?</h2>
          <p>
            Yes, the Random Pok&eacute;mon Generator app is completely free to
            use.
          </p>
          <h2 className="font-bold text-lg">
            Q: Are all Pok&eacute;mon available to generate?
          </h2>
          <p>
            Yes, all Pok&eacute;mon from the main series games are available to
            generate, including legendary and mythical Pok&eacute;mon.
          </p>
          <h2 className="font-bold text-lg">
            Q: Are there any limitations on how many Pok&eacute;mon I can
            generate?
          </h2>
          <p>
            There is no limit on the number of Pok&eacute;mon you can generate
            using the Random Pok&eacute;mon Generator app. You can generate as
            many Pok&eacute;mon as you like.
          </p>
          <h2 className="font-bold text-lg">Q: Is the app mobile-friendly?</h2>
          <p>
            Yes, the Random Pok&eacute;mon Generator app is fully responsive and
            works on all devices, including smartphones and tablets.
          </p>
          <h2 className="font-bold text-lg">Q: Is the app safe to use?</h2>
          <p>
            Yes, the Random Pok&eacute;mon Generator app is safe to use. It does
            not collect any personal information or data and does not contain
            any malicious software or viruses.
          </p>
          <h2 className="font-bold text-lg">
            Q: Is the app regularly updated?
          </h2>
          <p>
            Yes, the Random Pok&eacute;mon Generator app is regularly updated
            with new features and improvements. Be sure to check back often for
            the latest updates.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
