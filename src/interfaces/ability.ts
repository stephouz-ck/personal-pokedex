export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: Generation;
  names: Name[];
  effect_entries: Welcome2EffectEntry[];
  effect_changes: EffectChange[];
  flavor_text_entries: FlavorTextEntry[];
  pokemon: AbilityPokemon[];
}

export interface EffectChange {
  version_group: Generation;
  effect_entries: EffectChangeEffectEntry[];
}

export interface EffectChangeEffectEntry {
  effect: string;
  language: Generation;
}

export interface Generation {
  name: string;
  url: string;
}

export interface Welcome2EffectEntry {
  effect: string;
  short_effect: string;
  language: Generation;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Generation;
  version_group: Generation;
}

export interface Name {
  name: string;
  language: Generation;
}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: Generation;
}
