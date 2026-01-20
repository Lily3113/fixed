import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2024
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trebox Finance (Pvt) Ltd ("we", "our", "us") is committed to protecting the privacy 
                  and security of your personal information. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our services or visit our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Personal identification information (name, national ID, date of birth)</li>
                  <li>Contact information (email address, phone number, physical address)</li>
                  <li>Financial information (income, employment details, bank account details)</li>
                  <li>Loan application information and repayment history</li>
                  <li>Communications with us (emails, calls, inquiries)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>To process and evaluate loan applications</li>
                  <li>To verify your identity and assess creditworthiness</li>
                  <li>To communicate with you about your account and services</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To improve our services and customer experience</li>
                  <li>To prevent fraud and maintain security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  4. Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Credit bureaus for credit assessment purposes</li>
                  <li>Regulatory authorities as required by law</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law or court order</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  This includes encryption, secure servers, and access controls.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">You have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Access your personal information held by us</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  7. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: privacy@treboxfinance.co.zw</p>
                  <p>Phone: +263 24 2123 456</p>
                  <p>Address: 123 Samora Machel Avenue, Harare, Zimbabwe</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
