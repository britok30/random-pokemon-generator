import React from "react";
import Head from "next/head";

export const Seo = () => {
  const pageTitle = `Random Pokémon Generator`;
  const pageDesc =
    "Looking for a fun way to discover new Pokémon? Try the Random Pokémon Generator! With just a click of a button, you can generate a random Pokémon from the entire Pokédex. Whether you're a hardcore trainer or a casual fan, the Random Pokémon Generator is sure to provide endless entertainment. Give it a try today!";
  const canonicalUrl = "https://randompokemongenerator.dev";
  const twitterHandle = "@britoszn";

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
      <meta content="Kelvin Brito" name="author" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={pageDesc} key="desc" />
      <meta
        name="keywords"
        content="random pokemon generator"
      />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} key="ogdesc" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://randompokemongenerator.dev"
        key="ogurl"
      />
      <meta
        property="og:image"
        content="https://randompokemongenerator.dev/pokemon.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta
        name="twitter:image"
        content="https://randompokemongenerator.dev/pokemon.png"
      />
      <link rel="canonical" key="canonical" href={canonicalUrl} />
    </Head>
  );
};
