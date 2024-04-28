'use client';

import GlobalStyle from '@/app/ui/styles/globalStyles';
import CssVariables from '@/app/ui/styles/cssVariables';

export default function GlobalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <CssVariables />
      <GlobalStyle />
  
      {children}
    </>
  );
}
