import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

export default function Terms() {
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
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: January 2024
            </p>

            <div className="prose prose-lg max-w-none text-foreground">
              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services of Trebox Finance (Pvt) Ltd, you agree to be 
                  bound by these Terms and Conditions. If you do not agree to these terms, please 
                  do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  2. Loan Application and Approval
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>All loan applications are subject to approval based on our assessment criteria</li>
                  <li>We reserve the right to accept or reject any application at our sole discretion</li>
                  <li>Approval does not guarantee funding until all documentation is verified</li>
                  <li>Loan amounts, terms, and interest rates are determined based on individual assessment</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  3. Interest Rates and Fees
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Interest rates and fees will be clearly disclosed before you sign any loan agreement. 
                  Rates may vary based on loan type, amount, term, and your credit profile. All applicable 
                  fees, including administration fees, will be detailed in your loan agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  4. Repayment Terms
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Repayments must be made according to the agreed schedule</li>
                  <li>Late payments may incur additional fees and interest charges</li>
                  <li>Failure to repay may result in legal action and credit bureau reporting</li>
                  <li>Early repayment is allowed without penalty in most cases</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  5. Borrower Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed">As a borrower, you agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Provide accurate and truthful information in your application</li>
                  <li>Notify us of any changes to your contact information or financial situation</li>
                  <li>Use the loan funds for the purpose stated in your application</li>
                  <li>Make repayments on time according to the agreed schedule</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  6. Default and Collection
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the event of default, we may take any of the following actions: report the default 
                  to credit bureaus, engage collection agencies, initiate legal proceedings, and/or 
                  recover collateral (where applicable). We encourage borrowers experiencing difficulty 
                  to contact us early to discuss alternative arrangements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trebox Finance shall not be liable for any indirect, incidental, or consequential 
                  damages arising from the use of our services. Our liability is limited to the 
                  extent permitted by applicable laws in Zimbabwe.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  8. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions shall be governed by and construed in accordance with 
                  the laws of Zimbabwe. Any disputes shall be subject to the exclusive jurisdiction 
                  of the courts of Zimbabwe.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  9. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes 
                  will be effective upon posting to our website. Continued use of our services 
                  constitutes acceptance of the modified terms.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
