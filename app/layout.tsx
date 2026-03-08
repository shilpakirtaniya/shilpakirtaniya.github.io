import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shilpa Kirtaniya',
  description: 'Portfolio by Shilpa Kirtaniya',
  icons: {
    icon: '/src/project/imges/heroImages/hero2.ico',
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