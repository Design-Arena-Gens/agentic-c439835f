import Hero from '@/components/Hero';
import { Services, Testimonials, WhyUs } from '@/components/Sections';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <Services />
      <Testimonials />
    </div>
  );
}
