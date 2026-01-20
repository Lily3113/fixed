import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Tractor, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const loanProducts = [
  {
    id: "personal",
    icon: User,
    title: "Personal Loans",
    description: "Cover unexpected expenses, medical bills, home improvements, or personal emergencies with our flexible personal loan options.",
    features: ["Up to $5,000 USD", "6-24 month terms", "Competitive interest rates"],
    color: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your business growth with working capital, equipment financing, or expansion funding designed for SMEs.",
    features: ["Up to $50,000 USD", "Flexible repayment", "Quick disbursement"],
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    id: "agricultural",
    icon: Tractor,
    title: "Agricultural Loans",
    description: "Support your farming operations with loans for seeds, equipment, livestock, and seasonal working capital.",
    features: ["Seasonal terms available", "Input financing", "Harvest-aligned payments"],
    color: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in your future or your children's education with loans covering tuition, books, and living expenses.",
    features: ["School fee financing", "University funding", "Skill development"],
    color: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function LoanProducts() {
  return (
    <section className="section-padding bg-background" id="loan-products">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loan Products Tailored for You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From personal needs to business growth, we offer a range of micro-loan products 
            designed to meet your unique financial requirements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {loanProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-card border border-border p-8 rounded-xl card-hover group"
            >
              <div className={`w-16 h-16 rounded-xl ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className={`h-8 w-8 ${product.iconColor}`} />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to={`/loans#${product.id}`}
                className="inline-flex items-center text-accent font-medium hover:gap-3 gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/apply">Apply for a Loan Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
