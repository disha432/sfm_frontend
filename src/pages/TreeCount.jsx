import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Guide from '../components/Guide';
import UploadSection from '../components/UploadSection';
export function TreeCount() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
          <Guide/>
          <UploadSection/>
      <Footer />
    </div>
  );
}
