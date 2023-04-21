import {
  getPokemonByName,
  getPokemonList,
  getRunningQueriesThunk,
} from "../../../lib/services/pokemonApi";
import { makeStore, wrapper } from "../../../lib/store";
import Pokemon from "../[name]";

export async function getStaticPaths() {
  const store = makeStore();
  const result = await store.dispatch(getPokemonList.initiate());

  return {
    paths: result.data?.results
      .map((p) => `/pokemon/ssg/${p.name}`)
      .slice(0, 10),
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const name = context.params?.name;
    if (typeof name === "string") {
      store.dispatch(getPokemonByName.initiate(name));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

export default Pokemon;
