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

const heroImage = '/__generating__/img_f56316affffc.png';
const aboutImage = '/__generating__/img_08e8fce7693d.png';
const projectImages = [
  '/__generating__/img_144d565fadad.png',
  '/__generating__/img_02f6a3c4f920.png',
  '/__generating__/img_d67693201f4e.png',
  '/__generating__/img_a1f2333a7274.png',
  '/__generating__/img_8b661b1897b1.png',
  '/__generating__/img_5dd1e345ffd3.png',
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