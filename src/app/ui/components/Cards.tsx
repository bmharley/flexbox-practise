'use client';

import styled from 'styled-components';
import Card from '@/app/ui/components/Card';
import { CharacterCollection, Character } from '@/app/common/types';
import MediaQueries from '@/app/ui/styles/mediaQueries';

export const CardsWrap = styled.main`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 100%;
  padding: 50px;
  
  @media (min-width: ${MediaQueries.FROM_SMALL}) {
    padding: 70px;
  }

  @media (min-width: ${MediaQueries.FROM_MEDIUM}) {
    padding: 20px;
  }
`;

export const CardsCollection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${MediaQueries.FROM_MEDIUM}) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`;

interface CardsProps {
  characterCollection: CharacterCollection;
};

export default function Cards({ characterCollection }: CardsProps) {

  return (
    <CardsWrap>
      <CardsCollection>
        {
          characterCollection.map((character: Character) => (
            <Card key={character.id} cardData={character} />
          ))
        }
      </CardsCollection>
    </CardsWrap>
  );
}
