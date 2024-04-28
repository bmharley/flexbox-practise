'use client';

import styled from 'styled-components';

export const LoadingIndicator = styled.p`
    height: 60px;
    margin-top: var(--spacing);
    margin-bottom: var(--spacing);
    font-size: 20px;
    line-height: 60px;
    padding-left: 72px;
    background-image: url(/icon-loading.svg);
    background-size: 60px 60px;
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export default function Loading() {
  return (
    <LoadingIndicator>Loading...</LoadingIndicator>
  );
}
