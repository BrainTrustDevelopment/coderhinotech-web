import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import CaseStudies from '@/components/sections/case-studies';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import FeatureHighlight from '@/components/sections/feature-highlight';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeatureHighlight />
      {/*<CaseStudies />*/}
      <Testimonials />
      {/*<Contact />*/}
    </>
  );
}