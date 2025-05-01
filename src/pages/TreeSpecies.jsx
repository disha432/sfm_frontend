import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Guide from '../components/Guide';
import UploadSection from '../components/UploadSection';

export function TreeSpecies() {
  return (
    <>
      <Header />
      <Guide/>
      <UploadSection/>
      <Footer />
    </>
  );
}
