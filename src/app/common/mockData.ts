import { Character, CharacterIds, CharacterTypes } from '@/app/common/types';
import bios from '@/app/common/bios';

const mockData: {hero: Character, villain: Character, heroine: Character} = {
  hero: {
    id: CharacterIds.LUKE,
    type: CharacterTypes.HERO,
    name: 'Luke Skywalker',
    bio: bios.hero,
    wiki: '/luke-wiki',
  },
  villain: {
    id: CharacterIds.VADER,
    type: CharacterTypes.VILLAIN,
    name: 'Darth Vader',
    bio: bios.villain,
    wiki: '/vader-wiki',
  },
  heroine: {
    id: CharacterIds.LEIA,
    type: CharacterTypes.HEROINE,
    name: 'Leia Organa',
    bio: bios.heroine,
    wiki: '/leia-wiki',
  }
};

export default mockData;