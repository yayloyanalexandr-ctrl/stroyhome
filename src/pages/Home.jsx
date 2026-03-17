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
const projectImages = [
  'https://media.base44.com/images/public/69b958ccec4c782c15841246/fd384c386_generated_1076846b.png',
  'https://media.base44.com/images/public/69b958ccec4c782c15841246/26ce16976_generated_9fbdbdf0.png',
  'https://media.base44.com/images/public/69b958ccec4c782c15841246/6443a8f98_generated_73dcb5a8.png',
  'https://media.base44.com/images/public/69b958ccec4c782c15841246/9ecf7b251_generated_4f5d6102.png',
  'https://media.base44.com/images/public/69b958ccec4c782c15841246/639a52735_generated_343369c4.png',
  'https://media.base44.com/images/public/69b958ccec4c782c15841246/41a5b0a19_generated_aa08468d.png',
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection heroImage={heroImage} />
      <AboutSection aboutImage={aboutImage} />
      <ServicesSection />
      <ProjectsSection projectImages={projectImages} />
      <ReviewsSection />
      <FAQSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}