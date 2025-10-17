import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Switch,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import { useState } from "react";

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 0,
      yearlyPrice: 0,
      popular: false,
      features: [
        { text: "Up to 3 presentations", included: true },
        { text: "Basic templates", included: true },
        { text: "1GB storage", included: true },
        { text: "Community support", included: true },
        { text: "Analytics dashboard", included: false },
        { text: "Custom branding", included: false },
        { text: "Priority support", included: false },
        { text: "Advanced animations", included: false },
      ],
    },
    {
      name: "Professional",
      description: "Ideal for professionals and growing teams",
      monthlyPrice: 19,
      yearlyPrice: 190,
      popular: true,
      features: [
        { text: "Unlimited presentations", included: true },
        { text: "Premium templates", included: true },
        { text: "10GB storage", included: true },
        { text: "Email support", included: true },
        { text: "Analytics dashboard", included: true },
        { text: "Custom branding", included: true },
        { text: "Priority support", included: false },
        { text: "Advanced animations", included: false },
      ],
    },
    {
      name: "Enterprise",
      description: "For large teams and organizations",
      monthlyPrice: 49,
      yearlyPrice: 490,
      popular: false,
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Custom templates", included: true },
        { text: "Unlimited storage", included: true },
        { text: "24/7 phone support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "White labeling", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom integrations", included: true },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              transparent
            </span>{" "}
            pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. Always flexible to scale up
            or down.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm", !isYearly && "font-semibold")}>
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={cn("text-sm", isYearly && "font-semibold")}>
              Yearly
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "relative h-full",
                  plan.popular && "border-primary shadow-xl"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/30 mt-0.5" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            !feature.included && "text-muted-foreground/50"
                          )}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.monthlyPrice === 0
                      ? "Get Started Free"
                      : "Start Free Trial"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Have questions?{" "}
            <a href="#" className="text-primary hover:underline">
              Check our FAQ
            </a>{" "}
            or{" "}
            <a href="#" className="text-primary hover:underline">
              contact sales
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
