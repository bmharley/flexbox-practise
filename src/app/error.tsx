'use client';

import styled from 'styled-components';

export const ErrorMessage = styled.p`
  max-width: 400px;
  margin: 60px auto;
  font-size: 36px;
  text-align: center;
  font-style: italic;
  color: var(--color-error);
`;

export default function Error() {
  return (
    <ErrorMessage>Oops, sorry something went wrong</ErrorMessage>
  );
}
