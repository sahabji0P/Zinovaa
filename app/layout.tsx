import './globals.css';
import type { Metadata } from 'next';
import { outfit } from './fonts';
import { Footer } from '@/components/layout/Footer';
import { Chatbot } from '@/components/chat/Chatbot';

export const metadata: Metadata = {
  title: 'Zinovaa - Style That Speaks Your Language',
  description: 'Express your authentic self with Zinovaa\'s curated fashion collections, delivered in 30-60 minutes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}