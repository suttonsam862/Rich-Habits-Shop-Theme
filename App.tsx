
import React, { useState } from 'react';
import { PageType } from './types';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { ShopifyExporter } from './components/Admin/ShopifyExporter';

// Pages
import { ShopPage } from './components/Pages/ShopPage';
import { ProductPage } from './components/Pages/ProductPage';
import { TeamStorePage } from './components/Pages/TeamStorePage';
import { ContactPage } from './components/Pages/ContactPage';
import { AboutPage } from './components/Pages/AboutPage';
import { AIGearLabPage } from './components/Pages/AIGearLabPage';
import { PastEventsPage } from './components/Pages/PastEventsPage';

// Home Components
import { HeroSection } from './components/Hero/HeroSection';
import { ProductShowcase } from './components/Products/ProductShowcase';
import { TeamPortal } from './components/Teams/TeamPortal';
import { CustomGearPage } from './components/Services/CustomGearPage';
import { CustomGear } from './components/Services/CustomGear';
import { EventCalendar } from './components/Events/EventCalendar';
import { MissionSection } from './components/About/MissionSection';
import { Newsletter } from './components/Newsletter/Newsletter';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <ShopPage onNavigate={setCurrentPage} />;
      case 'product':
        return <ProductPage />;
      case 'team-store':
        return <TeamStorePage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      case 'about':
        return <AboutPage />;
      case 'past-events':
        return <PastEventsPage />;
      case 'ai-lab':
        return <AIGearLabPage />;
      case 'teams':
        return (
          <div className="pt-24">
             <TeamPortal />
             <CustomGear />
          </div>
        );
      case 'events':
         return (
           <div className="pt-24 bg-brand-black min-h-screen">
             <EventCalendar />
           </div>
         );
      case 'custom':
        return <CustomGearPage />;
      case 'home':
      default:
        return (
          <>
            <HeroSection />
            <ProductShowcase />
            <TeamPortal />
            <CustomGear />
            <EventCalendar />
            <MissionSection />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Header onNavigate={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
      
      <ShopifyExporter />
    </div>
  );
};

export default App;
