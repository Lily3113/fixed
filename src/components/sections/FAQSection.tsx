import { motion } from "framer-motion";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What documents do I need to apply for a loan?",
    answer: "To apply for a loan, you'll need: a valid national ID or passport, proof of income (pay slips or bank statements), proof of residence (utility bill or lease agreement), and completed application form. Business loans may require additional documents such as business registration and financial statements.",
  },
  {
    question: "How long does the loan approval process take?",
    answer: "Our approval process typically takes 24-48 hours after receiving all required documents. Once approved, funds are usually disbursed within 24 hours to your bank account or mobile wallet.",
  },
  {
    question: "What are the interest rates for your loans?",
    answer: "Interest rates vary depending on the loan type, amount, and term. Personal loans typically range from 10-25% per annum, while business loans may range from 15-30% per annum. We provide a clear breakdown of all costs before you sign any agreement.",
  },
  {
    question: "Can I repay my loan early without penalties?",
    answer: "Yes! We encourage early repayment and do not charge any penalties for settling your loan ahead of schedule. In some cases, early repayment may even reduce your total interest paid.",
  },
  {
    question: "What happens if I miss a payment?",
    answer: "If you anticipate difficulty making a payment, contact us immediately. We understand that circumstances change, and we're willing to work with you on modified repayment arrangements. Late payments may incur additional charges as outlined in your loan agreement.",
  },
  {
    question: "Am I eligible for a loan if I'm self-employed?",
    answer: "Yes, self-employed individuals are eligible for loans. You'll need to provide proof of business income through bank statements, tax returns, or other financial documentation covering the past 6-12 months.",
  },
  {
    question: "How much can I borrow?",
    answer: "Loan amounts depend on your income, repayment capacity, and the loan type. Personal loans range up to $5,000 USD, while business loans can go up to $50,000 USD. We assess each application individually to determine the appropriate amount.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use bank-grade encryption and security measures to protect all your personal and financial information. We never share your data with third parties without your explicit consent.",
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function FAQSection() {
  return (
    <section className="section-padding bg-secondary" id="faqs">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our loan products, 
            application process, and repayment terms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
