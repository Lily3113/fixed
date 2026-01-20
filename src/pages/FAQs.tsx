import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import FAQSection from "@/components/sections/FAQSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function FAQs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding charcoal-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Support
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Find answers to the most common questions about our loan products, 
              application process, and repayment terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Still Have Questions */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-8 md:p-12 text-center"
          >
            <MessageCircle className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Can't find the answer you're looking for? Our friendly customer support 
              team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+263242123456">Call +263 24 2123 456</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
