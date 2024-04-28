import { render, screen } from '@testing-library/react';
import mockData from '@/app/common/mockData';
import Cards from '@/app/ui/components/Cards';

describe('GIVEN cards component is loaded', () => {

  it('THEN a list of cards is shown and populated with character details', async () => {
    render(<Cards characterCollection={Object.values(mockData)} />);

    expect(screen.getByText(mockData.hero.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.villain.name)).toBeInTheDocument();
    expect(screen.getByText(mockData.heroine.name)).toBeInTheDocument();
  });
});
