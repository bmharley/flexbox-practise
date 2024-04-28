import Cards from '@/app/ui/components/Cards';
import { CharacterCollection, Character, CharacterApiResponse, CharacterTypes, CharacterIds } from '@/app/common/types';
import getCharacter from '@/app/common/requests';
import bios from '@/app/common/bios';

export default async function CardsWrapper() {

  const heroJson = await getCharacter(CharacterIds.LUKE) as CharacterApiResponse,
        villainJson = await getCharacter(CharacterIds.VADER) as CharacterApiResponse,
        heroineJson = await getCharacter(CharacterIds.LEIA) as CharacterApiResponse;

  const hero: Character = {...heroJson, bio: bios.hero, type: CharacterTypes.HERO},
        villain: Character = {...villainJson, bio: bios.villain, type: CharacterTypes.VILLAIN},
        heroine: Character = {...heroineJson, bio: bios.heroine, type: CharacterTypes.HEROINE};
  
  const characterCollection: CharacterCollection = [
    hero,
    villain,
    heroine,
  ];

  return (
    <Cards characterCollection={characterCollection} />
  );
}
