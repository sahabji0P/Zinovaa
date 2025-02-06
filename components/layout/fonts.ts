import { Outfit, Playfair_Display, Poppins } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});