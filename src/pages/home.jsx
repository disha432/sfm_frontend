import React from 'react';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import About from '../components/About';
import Features from '../components/Features';
import Footer from '../components/Footer';

export function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Features />
      <Footer />
    </>
  );
}
