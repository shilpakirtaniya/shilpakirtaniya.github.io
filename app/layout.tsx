import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project - ShIlpa KIRtanIya',
  description: 'Portfolio projects by ShIlpa KIRtanIya',
  icons: {
    icon: '/src/project/imges/heroImages/x-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}