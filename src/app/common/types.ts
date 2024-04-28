export enum CharacterTypes {
  HERO,
  HEROINE,
  VILLAIN,
};

export enum CharacterIds {
  HERO,
  HEROINE,
  VILLAIN,
};

export enum CharacterIds {
  LUKE = 1,
  VADER = 4,
  LEIA = 5,
};

export interface CharacterApiResponse {
  id: number;
  name: string;
  wiki: string;
};

export interface Character extends CharacterApiResponse {
  bio: string;
  type: CharacterTypes;
};

export type CharacterCollection = Character[];
