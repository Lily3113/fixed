import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with honesty and transparency in all our dealings.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We tailor solutions to meet your needs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in service delivery.",
  },
  {
    icon: Shield,
    title: "Responsibility",
    description: "We promote responsible lending and borrowing practices.",
  },
];

const team = [
  {
    name: "Takunda Maphosa",
    role: "Chief Executive Officer",
    bio: "20+ years in financial services across Africa",
  },
  {
    name: "Grace Mutambirwa",
    role: "Chief Operations Officer",
    bio: "Expert in microfinance operations and risk management",
  },
  {
    name: "Farai Chimedza",
    role: "Head of Credit",
    bio: "Specialist in agricultural and SME financing",
  },
];

export default function About() {
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
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Zimbabwe's <span className="text-accent">Financial Future</span>
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Trebox Finance (Pvt) Ltd is a registered microfinance institution dedicated to 
              providing accessible, transparent, and responsible financial solutions to 
              individuals and businesses across Zimbabwe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Financial Bridges Since 2015
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2015, Trebox Finance emerged from a simple observation: hardworking 
                  Zimbabweans and small businesses were being underserved by traditional banking 
                  institutions. Access to affordable credit was a significant barrier to growth 
                  and financial stability for many.
                </p>
                <p>
                  Our founders, with decades of combined experience in banking and financial services, 
                  set out to create a microfinance institution that would prioritize accessibility, 
                  transparency, and genuine customer partnership.
                </p>
                <p>
                  Today, we've helped thousands of individuals achieve personal goals, enabled 
                  hundreds of small businesses to grow, supported farmers across the country, 
                  and funded education dreams for countless families.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-secondary p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">8+</div>
                <div className="text-muted-foreground">Years of Service</div>
              </div>
              <div className="bg-secondary p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">5000+</div>
                <div className="text-muted-foreground">Loans Disbursed</div>
              </div>
              <div className="bg-secondary p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">$10M+</div>
                <div className="text-muted-foreground">Funds Disbursed</div>
              </div>
              <div className="bg-secondary p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-xl shadow-soft"
            >
              <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, affordable, and responsible financial solutions that empower 
                individuals and businesses in Zimbabwe to achieve their goals and improve their 
                quality of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-card p-8 rounded-xl shadow-soft"
            >
              <div className="w-14 h-14 rounded-lg gold-gradient flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Zimbabwe's most trusted and customer-centric microfinance institution, 
                recognized for our commitment to financial inclusion, ethical practices, and 
                meaningful impact on communities we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-card p-6 rounded-xl text-center shadow-soft"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-6">
              Regulatory Compliance
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Trebox Finance (Pvt) Ltd is a registered microfinance institution operating under 
              the regulatory framework of the Reserve Bank of Zimbabwe. We adhere to all relevant 
              financial regulations and maintain the highest standards of corporate governance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <span>RBZ Registered</span>
              <span>•</span>
              <span>ZIMRA Compliant</span>
              <span>•</span>
              <span>AML/CFT Compliant</span>
              <span>•</span>
              <span>Consumer Protection Act</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
