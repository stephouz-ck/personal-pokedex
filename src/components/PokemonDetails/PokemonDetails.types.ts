import { Ability } from "../../interfaces/ability";
import { Pokemon } from "../../interfaces/api";

export type PokemonDetailsProps = {
  selectedPokemon: Pokemon;
  onClose: () => void;
};
