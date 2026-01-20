import { motion } from "framer-motion";
import { Shield, Clock, FileCheck, Users, Percent, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Approval",
    description: "Get your loan approved within 24-48 hours. Our streamlined process ensures you receive funds when you need them most.",
  },
  {
    icon: Shield,
    title: "Secure & Confidential",
    description: "Your personal and financial information is protected with bank-grade security. We prioritize your privacy at every step.",
  },
  {
    icon: Percent,
    title: "Transparent Terms",
    description: "No hidden fees or surprises. We provide clear interest rates, repayment schedules, and all terms upfront.",
  },
  {
    icon: FileCheck,
    title: "Simple Documentation",
    description: "Minimal paperwork required. Our digital-first approach makes the application process quick and hassle-free.",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description: "Join thousands of satisfied customers across Zimbabwe who have achieved their financial goals with our support.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Our customer service team is available to guide you through the entire process and answer all your questions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Trebox Finance?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're committed to providing accessible financial solutions with integrity, 
            transparency, and a genuine focus on your success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-8 rounded-xl shadow-soft card-hover"
            >
              <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
