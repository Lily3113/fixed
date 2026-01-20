import { motion } from "framer-motion";
import { FileText, UserCheck, Clock, Banknote } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Application",
    description: "Fill out our simple online application form with your personal details and loan requirements. It only takes a few minutes.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Document Verification",
    description: "Submit required documents for verification. Our team reviews your application and assesses your eligibility.",
  },
  {
    number: "03",
    icon: Clock,
    title: "Quick Approval",
    description: "Receive a decision within 24-48 hours. If approved, you'll get a clear breakdown of terms, interest rates, and repayment schedule.",
  },
  {
    number: "04",
    icon: Banknote,
    title: "Receive Funds",
    description: "Once you accept the terms and sign the agreement, funds are disbursed directly to your bank account or mobile wallet.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function HowItWorks() {
  return (
    <section className="section-padding charcoal-gradient" id="how-it-works">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Getting a loan with Trebox Finance is straightforward. Follow these simple steps 
            to access the funding you need.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-accent/30 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6 shadow-gold">
                  <step.icon className="h-9 w-9 text-accent-foreground" />
                </div>
                
                <span className="text-accent font-bold text-sm mb-2 block">
                  STEP {step.number}
                </span>
                
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
