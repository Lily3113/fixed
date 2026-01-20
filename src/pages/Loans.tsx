import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  User, Briefcase, Tractor, GraduationCap, 
  Check, ArrowRight, Calculator, Clock, FileText 
} from "lucide-react";

const loanTypes = [
  {
    id: "personal",
    icon: User,
    title: "Personal Loans",
    description: "Life is unpredictable. Our personal loans help you handle unexpected expenses, medical bills, home improvements, or any personal financial needs with flexible terms.",
    amount: "Up to $5,000 USD",
    term: "6 - 24 months",
    rate: "From 10% p.a.",
    features: [
      "Quick approval within 24 hours",
      "Minimal documentation required",
      "Flexible repayment options",
      "No collateral required for amounts up to $1,000",
      "Early repayment without penalties",
    ],
    requirements: [
      "Valid National ID or Passport",
      "Proof of income (payslip or bank statement)",
      "Proof of residence",
      "Two references",
    ],
    color: "bg-blue-500",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Loans",
    description: "Fuel your business growth with our SME-focused loans. Whether you need working capital, equipment financing, or funds for expansion, we've got you covered.",
    amount: "Up to $50,000 USD",
    term: "6 - 36 months",
    rate: "From 15% p.a.",
    features: [
      "Competitive rates for established businesses",
      "Working capital and asset financing",
      "Business expansion funding",
      "Cash flow management support",
      "Dedicated business advisor",
    ],
    requirements: [
      "Business registration documents",
      "6 months bank statements",
      "Financial statements (if available)",
      "Business plan for larger amounts",
      "Collateral may be required",
    ],
    color: "bg-accent",
  },
  {
    id: "agricultural",
    icon: Tractor,
    title: "Agricultural Loans",
    description: "Supporting Zimbabwe's agricultural sector with tailored financing for inputs, equipment, livestock, and seasonal operations aligned with farming cycles.",
    amount: "Up to $30,000 USD",
    term: "Seasonal - 24 months",
    rate: "From 12% p.a.",
    features: [
      "Seasonal payment structures",
      "Input financing (seeds, fertilizers)",
      "Equipment and machinery loans",
      "Livestock financing",
      "Harvest-aligned repayment",
    ],
    requirements: [
      "Proof of land ownership or lease",
      "Farming history documentation",
      "Crop or livestock plan",
      "Off-taker agreements (if applicable)",
      "Insurance for larger amounts",
    ],
    color: "bg-green-500",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Loans",
    description: "Invest in the future with our education loans. Cover school fees, university tuition, professional courses, and educational materials for yourself or your family.",
    amount: "Up to $10,000 USD",
    term: "12 - 48 months",
    rate: "From 8% p.a.",
    features: [
      "Lowest interest rates",
      "Grace period during studies",
      "Cover tuition and living expenses",
      "Professional certification funding",
      "Skill development courses",
    ],
    requirements: [
      "Admission or enrollment letter",
      "Fee structure from institution",
      "Guardian/parent details (for minors)",
      "Proof of income (applicant or guarantor)",
    ],
    color: "bg-purple-500",
  },
];

export default function Loans() {
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
              Loan Products
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Financial Solutions <span className="text-accent">Tailored for You</span>
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-10">
              Explore our range of micro-loan products designed to meet your unique needs. 
              From personal emergencies to business expansion, we have the right solution for you.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/apply">Apply Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-background border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-4">
              <Calculator className="h-10 w-10 text-accent" />
              <div className="text-left">
                <div className="font-serif text-xl font-bold text-foreground">From 8% p.a.</div>
                <div className="text-muted-foreground text-sm">Competitive Rates</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Clock className="h-10 w-10 text-accent" />
              <div className="text-left">
                <div className="font-serif text-xl font-bold text-foreground">24-48 Hours</div>
                <div className="text-muted-foreground text-sm">Quick Approval</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <FileText className="h-10 w-10 text-accent" />
              <div className="text-left">
                <div className="font-serif text-xl font-bold text-foreground">Simple Process</div>
                <div className="text-muted-foreground text-sm">Minimal Documentation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products Detail */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-20">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={loan.id}
              id={loan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`w-16 h-16 rounded-xl ${loan.color} flex items-center justify-center mb-6`}>
                  <loan.icon className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {loan.title}
                </h2>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {loan.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-secondary p-4 rounded-lg text-center">
                    <div className="font-bold text-foreground">{loan.amount}</div>
                    <div className="text-muted-foreground text-xs">Loan Amount</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg text-center">
                    <div className="font-bold text-foreground">{loan.term}</div>
                    <div className="text-muted-foreground text-xs">Loan Term</div>
                  </div>
                  <div className="bg-secondary p-4 rounded-lg text-center">
                    <div className="font-bold text-foreground">{loan.rate}</div>
                    <div className="text-muted-foreground text-xs">Interest Rate</div>
                  </div>
                </div>

                <Button variant="gold" size="lg" asChild>
                  <Link to="/apply" className="flex items-center gap-2">
                    Apply for {loan.title}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary p-6 rounded-xl">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    Requirements
                  </h3>
                  <ul className="space-y-3">
                    {loan.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Interest rates and terms displayed are indicative and may vary based on your credit 
              profile, loan amount, and other factors. All loans are subject to approval and 
              verification. Trebox Finance reserves the right to accept or decline any application. 
              Please read all terms and conditions carefully before signing any loan agreement.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
