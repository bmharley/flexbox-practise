import { CharacterApiResponse } from '@/app/common/types';

const getCharacter = async (id: number) => {
  const response = await fetch(
    `https://akabab.github.io/starwars-api/api/id/${id}.json`
  );

  const responseJson = await response.json() as CharacterApiResponse;
  
  return responseJson;
};

export default getCharacter;
