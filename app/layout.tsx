// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Navneet Kaur | Data Analyst Portfolio',
  description: 'Full-stack developer and data science practitioner.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}