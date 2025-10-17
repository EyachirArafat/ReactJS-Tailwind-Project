import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
} from "@/components/ui";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "You get 14 days of unlimited access to all features. No credit card required. After the trial, you can choose a plan that suits your needs.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we'll prorate any differences.",
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer:
        "We offer 50% discount for registered nonprofits and educational institutions. Contact our sales team with your verification documents.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We're also SOC 2 Type II certified.",
    },
    {
      question: "Can I export my presentations?",
      answer:
        "Yes, you can export your presentations in multiple formats including PDF, PowerPoint, and as a shareable link. Video export is available on Pro plans.",
    },
    {
      question: "Do you have an API?",
      answer:
        "Yes, we offer a comprehensive REST API for Enterprise customers. This allows you to integrate our platform with your existing tools and workflows.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all plans, priority support for Pro users, and 24/7 phone support for Enterprise customers. We also have extensive documentation and video tutorials.",
    },
    {
      question: "Can I collaborate with my team?",
      answer:
        "Yes! Real-time collaboration is available on all paid plans. You can work together on presentations, leave comments, and track changes.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <Badge variant="outline" className="mb-4">
              <HelpCircle className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                questions
              </span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Everything you need to know about our platform
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border rounded-lg px-4"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our team is here to
                  help.
                </p>
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Schedule a Demo
                  </Button>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    Average response time: <strong>2 hours</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
