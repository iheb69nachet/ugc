'use client';
import { ParallaxProvider } from 'react-scroll-parallax';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
} 