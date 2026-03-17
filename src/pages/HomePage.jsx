// src/pages/HomePage.jsx
import React from 'react';
import Container from '../components/ui/Container.jsx';
import HeroSection from '../components/home/HeroSection.jsx';
import NewsSection from '../components/home/NewsSection.jsx';
import AnnouncementSection from '../components/home/AnnouncementSection.jsx';
import QuickInfoSection from '../components/home/QuickInfoSection.jsx';
import OtherWebsites from '../components/home/OtherWebsites.jsx';
import ManagementStructure from '../components/home/ManagementStructure.jsx';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container className="py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <NewsSection />
          <div className="space-y-6">
            <AnnouncementSection />
            <QuickInfoSection />
          </div>
        </div>
        <ManagementStructure />
        <OtherWebsites />
      </Container>
    </>
  );
};

export default HomePage; 