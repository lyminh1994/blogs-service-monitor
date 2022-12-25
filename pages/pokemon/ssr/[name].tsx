import {
  getPokemonByName,
  getRunningQueriesThunk,
} from "../../../lib/services/pokemonApi";
import { wrapper } from "../../../lib/store";
import Pokemon from "../[name]";

export const getServerSideProps = wrapper.getServerSideProps(
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
