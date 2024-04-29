import { render, screen } from '@testing-library/react';
import mockData from '@/app/common/mockData';
import Card from '@/app/ui/components/Card';

describe('GIVEN card component is loaded', () => {

  it('THEN character details are shown', async () => {
    render(<Card cardData={mockData.hero} />);

    const button = screen.getByRole('link');

    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(mockData.hero.name);
    expect(screen.getByText(mockData.hero.bio)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/learn more/i);
    expect(button).toHaveAttribute(
        'href', mockData.hero.wiki
      );
  });
});
