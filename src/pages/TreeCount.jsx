import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export function TreeCount() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <h1 className="text-center mt-10 text-xl">This is tree count page..</h1>
      </main>
      
      <Footer />
    </div>
  );
}
