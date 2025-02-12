import { Chatbot } from '@/components/chat/Chatbot';
import { Footer } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next';
import { outfit } from '../components/layout/fonts';
import './globals.css';

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
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
        <Chatbot />
        <Analytics />
      </body>
    </html>
  );
}