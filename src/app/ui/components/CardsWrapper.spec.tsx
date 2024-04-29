import { screen } from '@testing-library/react';
import { renderAsync } from '@/app/common/testUtils';
import fetchMock from 'fetch-mock-jest'; 
import { CharacterIds } from '@/app/common/types';
import CardsWrapper from '@/app/ui/components/CardsWrapper';
import mockData from '@/app/common/mockData';

beforeAll(() => {
  fetchMock.get(new RegExp(`https://akabab.github.io/starwars-api/api/id/${CharacterIds.LUKE}.json`), mockData.hero);
  fetchMock.get(new RegExp(`https://akabab.github.io/starwars-api/api/id/${CharacterIds.VADER}.json`), mockData.villain);
  fetchMock.get(new RegExp(`https://akabab.github.io/starwars-api/api/id/${CharacterIds.LEIA}.json`), mockData.heroine);
});

afterAll(() => {
  fetchMock.mockReset();
});

describe('GIVEN cards page is requested', () => {

  it('THEN a list of cards is shown and populated with character details', async () => {
    await renderAsync(CardsWrapper, {});

    expect(screen.getByText(mockData.hero.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.villain.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.heroine.name)).toBeInTheDocument();
  });
});
