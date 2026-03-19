import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import ProjectsSection from '../components/landing/ProjectsSection';
import ReviewsSection from '../components/landing/ReviewsSection';
import FAQSection from '../components/landing/FAQSection';
import ContactsSection from '../components/landing/ContactsSection';
import Footer from '../components/landing/Footer';
import QuizModal from '../components/landing/QuizModal';

const heroImage = 'https://media.base44.com/images/public/69b958ccec4c782c15841246/92e85bad2_generated_623b2115.png';
const aboutImage = 'https://media.base44.com/images/public/69b958ccec4c782c15841246/3a10121c5_generated_70e6ad1f.png';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection heroImage={heroImage} />
      <AboutSection aboutImage={aboutImage} />
      <ServicesSection />
      <ProjectsSection />
      <ReviewsSection />
      <FAQSection />
      <ContactsSection />
      <Footer />
      <QuizModal />
    </div>
  );
}