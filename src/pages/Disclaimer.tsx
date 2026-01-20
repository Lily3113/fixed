import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="h-10 w-10 text-accent" />
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Disclaimer
              </h1>
            </div>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2024
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  General Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided on this website is for general informational purposes only. 
                  While Trebox Finance (Pvt) Ltd strives to keep the information up to date and accurate, 
                  we make no representations or warranties of any kind, express or implied, about the 
                  completeness, accuracy, reliability, suitability, or availability of the information, 
                  products, services, or related graphics contained on the website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Not Financial Advice
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content on this website does not constitute financial, legal, or professional advice. 
                  Any reliance you place on such information is strictly at your own risk. Before making 
                  any financial decisions, we recommend consulting with qualified financial advisors who 
                  can assess your specific circumstances.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Loan Terms Disclaimer
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Interest rates, loan amounts, terms, and other financial information displayed on this 
                  website are indicative only and subject to change without notice. Actual rates and terms 
                  offered may vary based on your credit profile, loan amount, repayment term, and other 
                  factors. All loans are subject to approval and credit assessment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  External Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website may contain links to external websites that are not provided or maintained 
                  by Trebox Finance. We do not guarantee the accuracy, relevance, timeliness, or completeness 
                  of any information on these external websites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Responsible Lending Statement
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trebox Finance is committed to responsible lending practices. We encourage all borrowers 
                  to carefully consider their financial situation before applying for a loan. Borrowing 
                  beyond your means to repay can lead to financial hardship. If you are experiencing 
                  financial difficulty, please contact us immediately to discuss your options.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  No Guarantee of Approval
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Submission of a loan application does not guarantee approval. All applications are 
                  assessed individually based on our lending criteria. Trebox Finance reserves the 
                  right to decline any application without providing detailed reasons.
                </p>
              </section>

              <section className="mb-8 bg-secondary p-6 rounded-xl">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Risk Warning
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Warning:</strong> Taking out a loan is a significant financial commitment. 
                  Failure to make repayments on time may result in additional fees, damage to your 
                  credit score, legal action, and recovery of any collateral pledged. Only borrow 
                  what you can afford to repay.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this disclaimer, please contact us at:
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>Email: legal@treboxfinance.co.zw</p>
                  <p>Phone: +263 24 2123 456</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
