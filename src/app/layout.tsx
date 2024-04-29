import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalWrapper from '@/app/ui/components/globalWrapper'
import { APP_NAME, APP_DESCRIPTION } from './common/constants';

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
            <GlobalWrapper>
              {children}
            </GlobalWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
