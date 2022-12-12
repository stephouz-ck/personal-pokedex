import create from "zustand";
import { persist } from "zustand/middleware";
import { Pokemon } from "../interfaces/api";

export type StoreTypes = {
  firstPokemon: Pokemon | null;
  secondPokemon: Pokemon | null;
  setFirstPokemon: (first: Pokemon) => void;
  setSecondPokemon: (second: Pokemon) => void;
  onClear: () => void;
};

const useStore = create<StoreTypes>()(
  persist<StoreTypes>(
    (set) => ({
      firstPokemon: null,
      secondPokemon: null,
      setFirstPokemon: (newPokemon: Pokemon) =>
        set(() => ({ firstPokemon: newPokemon })),
      setSecondPokemon: (newPokemon: Pokemon) =>
        set(() => ({ secondPokemon: newPokemon })),
      onClear: () => set(() => ({ firstPokemon: null, secondPokemon: null })),
    }),
    {
      name: "global-storage",
    }
  )
);

export default useStore;
