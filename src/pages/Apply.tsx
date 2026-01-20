import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import LoanApplicationForm from "@/components/forms/LoanApplicationForm";
import { Shield, Clock, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Get a decision within 24-48 hours",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data is protected with encryption",
  },
  {
    icon: CheckCircle,
    title: "Simple Process",
    description: "Fill out one form for all loan types",
  },
];

export default function Apply() {
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
              Loan Application
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Apply for a Loan <span className="text-accent">Today</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Complete our simple application form and take the first step towards 
              achieving your financial goals. Our team will review and respond within 24-48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-secondary border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-4">
                <benefit.icon className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-semibold text-foreground">{benefit.title}</div>
                  <div className="text-muted-foreground text-sm">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border p-8 rounded-xl shadow-soft">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Loan Application Form
                </h2>
                <p className="text-muted-foreground mb-8">
                  Please fill out all required fields accurately to ensure fast processing.
                </p>
                <LoanApplicationForm />
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-secondary p-6 rounded-xl">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shrink-0">1</span>
                    <div>
                      <div className="font-medium text-foreground">Submit Application</div>
                      <div className="text-muted-foreground text-sm">Complete this form with accurate details</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shrink-0">2</span>
                    <div>
                      <div className="font-medium text-foreground">Verification Call</div>
                      <div className="text-muted-foreground text-sm">Our team will contact you to verify details</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shrink-0">3</span>
                    <div>
                      <div className="font-medium text-foreground">Document Submission</div>
                      <div className="text-muted-foreground text-sm">Submit required documents for processing</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shrink-0">4</span>
                    <div>
                      <div className="font-medium text-foreground">Approval & Disbursement</div>
                      <div className="text-muted-foreground text-sm">Receive funds in your account</div>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Need Help?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Have questions about the application process? Our team is here to help.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Phone:</span>{" "}
                    <a href="tel:+263242123456" className="text-accent hover:underline">
                      +263 24 2123 456
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email:</span>{" "}
                    <a href="mailto:apply@treboxfinance.co.zw" className="text-accent hover:underline">
                      apply@treboxfinance.co.zw
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-6 rounded-xl text-primary-foreground">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Important Notice
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  All information submitted is treated with strict confidentiality. 
                  We will never share your personal or financial information with 
                  third parties without your consent.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
