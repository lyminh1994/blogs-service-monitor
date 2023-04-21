import { ReactNode } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";

import DashboardLayout from "../../components/dashboard-layout";
import { useGetPokemonByNameQuery } from "../../lib/services/pokemonApi";

// Partial because first render (will get empty props while `getStaticProps` runs)
const Pokemon = () => {
  const router = useRouter();

  const name = router.query.name;
  const result = useGetPokemonByNameQuery(
    typeof name === "string" ? name : skipToken,
    {
      // If the page is not yet generated, router.isFallback will be true
      // initially until getStaticProps() finishes running
      skip: router.isFallback,
    }
  );
  const { isLoading, error, data } = result;

  return (
    <>
      <Head>
        <title>{data?.species.name ?? ""}</title>
      </Head>
      <article>
        {error ? (
          <>Oh no, there was an error</>
        ) : router.isFallback || isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <Image
              priority
              width={123}
              height={123}
              src={data.sprites.front_shiny}
              alt={data.species.name}
            />
          </>
        ) : null}
      </article>
    </>
  );
};

Pokemon.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default Pokemon;
