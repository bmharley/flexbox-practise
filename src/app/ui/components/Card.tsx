'use client';

import styled from 'styled-components';
import { Character, CharacterTypes } from '@/app/common/types';
import MediaQueries from '@/app/ui/styles/mediaQueries';
import { Big_Shoulders_Display } from 'next/font/google';

const bigShouldersDisplay = Big_Shoulders_Display({ subsets: ['latin'] })

export const GenericCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  flex-basis: 28%;
  padding: 30px 50px;
  background-color: #e38826;
  color: #fff;
`;

const HeroCard = styled(GenericCard)`
  background-color: #006970;
  border-radius: 8px 8px 0 0;

  @media (min-width: ${MediaQueries.FROM_MEDIUM}) {
    border-radius: 8px 0 0 8px;
  }
`;

const HeroineCard = styled(GenericCard)`
  background-color: #b90066;
  border-radius: 0 0 8px 8px;

  @media (min-width: ${MediaQueries.FROM_MEDIUM}) {
    border-radius: 0 8px 8px 0;
  }
`;

const VillainCard = styled(GenericCard)`
  background-color: #b11414;
`;

export const CardTitle = styled.h2`
  margin-top: 0;
  margin-bottom: var(--spacing);
  font-family: ${bigShouldersDisplay.style.fontFamily};
  font-weight: 700;
  font-size: 4rem;
  text-transform: uppercase;
`;

export const CardDescription = styled.p`
  flex-grow: 1; 
  margin-top: 0;
  margin-bottom: 60px;
`;

export const CardCta = styled.a`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 24px;
  background-color: #fff;
  text-decoration: none;

  &:hover {
    background-color: #eee;
  }

  &:active {
    text-decoration: underline;
  }
`;

const HeroCta = styled(CardCta)`
  color: #006970;
`;

const HeroineCta = styled(CardCta)`
  color: #b90066;
`;

const VillainCta = styled(CardCta)`
  color: #b11414;
`;

interface CardProps {
  cardData: Character;
};

const renderCard = ({ type, wiki }: Character, children: JSX.Element) => {
  switch (type) {
    case CharacterTypes.HERO:
      return <HeroCard>{children}<HeroCta href={wiki}>Learn more</HeroCta></HeroCard>;
    
    case CharacterTypes.HEROINE:
      return <HeroineCard>{children}<HeroineCta href={wiki}>Learn more</HeroineCta></HeroineCard>;

    case CharacterTypes.VILLAIN:
      return <VillainCard>{children}<VillainCta href={wiki}>Learn more</VillainCta></VillainCard>;
  }
}

const getCardContent = ({ name, bio }: Character) =>
  <>
    <CardTitle>{name}</CardTitle>

    <CardDescription>
      {bio}
    </CardDescription>
  </>;

export default function Card({ cardData }: CardProps) {
  return renderCard(cardData, getCardContent(cardData));
}
