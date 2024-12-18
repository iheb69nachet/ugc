"use client";
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <main className='bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </main>
  );
} 