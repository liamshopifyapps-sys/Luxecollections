import { motion } from "motion/react";

const faqs = [
  {
    question: "What is your standard shipping timeframe within the USA?",
    answer: "As a USA-based company, we prioritize efficient delivery. Standard shipping for our signature collection typically takes 5-7 business days. Most orders are processed within 48 hours from our Albuquerque boutique studio."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, Luxe Collection offers international delivery to selected regions. Shipping timelines and costs vary by location and are calculated at checkout. Please note that architectural import duties may apply."
  },
  {
    question: "What is your return policy for archive pieces?",
    answer: "We offer a 30-day return window for all unworn pieces in their original architectural packaging with all tags attached. Please visit our Shipping & Returns page for detailed instructions on initiating a return."
  },
  {
    question: "How can I track my order status?",
    answer: "Once your order is dispatched, you will receive a confirmation email containing a tracking number. You can monitor your delivery's journey through our integrated shipping partners."
  },
  {
    question: "Are your payments secure?",
    answer: "Security is a core pillar of our architecture. Every transaction on Luxe Collection is processed through encrypted, industry-standard payment gateways ensuring 100% data protection and PCI compliance."
  },
  {
    question: "Do you provide custom tailoring or sizing advice?",
    answer: "While we do not offer bespoke tailoring, our 'Services' page outlines our architectural consulting approach. You can reach out to our concierge for detailed sizing guides tailored to our specific silhouettes."
  }
];

export default function FAQ() {
  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.5em] mb-12 opacity-50 text-center">Concierge Center</p>
        <h1 className="text-6xl md:text-8xl mb-24 italic text-center">Frequently <br /> Asked Questions</h1>

        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-10 rounded-[2rem] border border-luxe-beige shadow-sm"
            >
              <h3 className="text-xl mb-6 text-luxe-gold font-serif">{faq.question}</h3>
              <p className="text-luxe-ink/70 leading-relaxed italic">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 border border-luxe-gold/20 rounded-[3rem] text-center bg-white/50">
           <h2 className="text-2xl mb-6">Still have questions?</h2>
           <p className="text-luxe-ink/40 mb-10 text-sm uppercase tracking-widest">Our team is ready to assist you.</p>
           <a href="/contact" className="inline-block bg-luxe-ink text-luxe-paper px-12 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-luxe-gold hover:text-white transition-all">
              Contact Concierge
           </a>
        </div>
      </div>
    </div>
  );
}
