"use client";
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import InstagramFeed from '@/components/InstagramFeed';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      {/* <InstagramFeed /> */}
      <Contact />
      <ScrollToTop />
    </main>
  );
} 