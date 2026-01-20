import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LoanProducts from "@/components/sections/LoanProducts";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyChooseUs />
      <LoanProducts />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
