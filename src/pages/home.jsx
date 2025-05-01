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
      <h1>This is home page..</h1>
      <HeroSection />
      <About />
      <Features />
      <Footer />
    </>
  );
}
