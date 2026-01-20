import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HowItWorksSection from "@/components/sections/HowItWorks";
import { Check, AlertTriangle, HelpCircle } from "lucide-react";

const eligibility = {
  general: [
    "Be at least 18 years old",
    "Be a Zimbabwean citizen or legal resident",
    "Have a valid National ID or Passport",
    "Have a verifiable source of income",
    "Have an active bank account or mobile money wallet",
    "Not be currently blacklisted by credit bureaus",
  ],
  documents: [
    "National ID (clear copy, both sides)",
    "Proof of income (payslip, bank statement, or contract)",
    "Proof of residence (utility bill or lease agreement)",
    "Two character references with contact details",
    "Business registration (for business loans)",
    "Land documents or lease (for agricultural loans)",
    "Admission letter (for education loans)",
  ],
};

const tips = [
  "Ensure all documents are clear and legible",
  "Provide accurate contact information",
  "Be honest about your income and expenses",
  "Have your references informed beforehand",
  "Apply for an amount you can comfortably repay",
];

export default function HowItWorksPage() {
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
              Process
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How It <span className="text-accent">Works</span>
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Our loan application process is designed to be simple, transparent, and fast. 
              Here's everything you need to know to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <HowItWorksSection />

      {/* Eligibility Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Requirements
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Eligibility & Documents
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Before applying, ensure you meet our eligibility criteria and have 
              the required documents ready.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-xl"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                General Eligibility
              </h3>
              <ul className="space-y-4">
                {eligibility.general.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-xl"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Required Documents
              </h3>
              <ul className="space-y-4">
                {eligibility.documents.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="h-12 w-12 text-accent mb-6" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Tips for a Successful Application
              </h2>
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-xl"
            >
              <AlertTriangle className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Common Reasons for Rejection
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Incomplete or inaccurate application information</li>
                <li>• Insufficient or unverifiable income</li>
                <li>• Poor credit history or existing defaults</li>
                <li>• Invalid or expired identification documents</li>
                <li>• Applying for an amount beyond repayment capacity</li>
                <li>• False or misleading information provided</li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                If your application is declined, our team will explain the reasons 
                and advise on steps you can take to improve your eligibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
