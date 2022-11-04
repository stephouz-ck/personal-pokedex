export interface Characteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  highest_stat: Response;
  descriptions: Description[];
}

export interface Description {
  description: string;
  language: Response;
}

export interface Response {
  name: string;
  url: string;
}

export interface AllCharacteristicsDto {
  results: Response[];
}
