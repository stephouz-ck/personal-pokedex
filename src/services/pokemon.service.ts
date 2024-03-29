import axios from "axios";
import { Ability, AllAbilitiesDto } from "../interfaces/ability";
import { AllPokemonsDto, Pokemon } from "../interfaces/api";
import {
  AllCharacteristicsDto,
  Characteristic,
} from "../interfaces/characteristics";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchAllPokemon = async (): Promise<Pokemon[]> => {
  try {
    const {
      data: { results },
    } = await axios.get<AllPokemonsDto>(
      `${BASE_URL}/pokemon/?offset=0&limit=151`
    );
    const allPokemons: Pokemon[] = [];
    for (const pokemonResponse of results) {
      const { data } = await axios.get<Pokemon>(pokemonResponse.url);
      allPokemons.push(data);
    }
    return allPokemons;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export const fetchAllAbilities = async (): Promise<Ability[]> => {
  try {
    const {
      data: { results },
    } = await axios.get<AllAbilitiesDto>(
      `${BASE_URL}/ability?offset=0&limit=151`
    );
    const abilities: Ability[] = [];
    for (const abilityRes of results) {
      const { data } = await axios.get<Ability>(abilityRes.url);
      abilities.push(data);
    }
    return abilities;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export const fetchAllCharacteristics = async (): Promise<Characteristic[]> => {
  try {
    const {
      data: { results },
    } = await axios.get<AllCharacteristicsDto>(
      `${BASE_URL}/characteristic?offset=0&limit=151`
    );
    const characteristics: Characteristic[] = [];
    for (const characteristicRes of results) {
      const { data } = await axios.get<Characteristic>(characteristicRes.url);
      characteristics.push(data);
    }
    return characteristics;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};
