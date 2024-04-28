import Link from 'next/link';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: var(--color-link);
  transition: 0.25s color ease;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: var(--color-link--hover);
  }

  &:active {
    text-decoration: none;
  }
`;

export const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: var(--spacing);
  font-size: var(--font-size);
  line-height: 24px;
`;

export const Section = styled.section`
  padding-bottom: 28px;

  &:not(:last-child) {
    margin-bottom: var(--section-spacing);
    border-bottom: 1px solid var(--color-section-separator);
  }
`;

export const SectionHeading = styled.h3`
  margin-bottom: var(--spacing);
  font-size: 24px;
  margin-top: 0;
`;

export const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  font-size: var(--font-size);
  list-style-type: disc;
`;

export const ListItem = styled.li`
  margin-bottom: var(--spacing);
  line-height: 24px;
`;

export const ListSecondaryText = styled.span`
  font-size: 14px;
`;
