import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Shield,
  Users,
  BarChart,
  Clock,
  Globe,
  Palette,
  Code,
  Layers,
  Smartphone,
  Cloud,
  Lock,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance ensures your presentations load instantly.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Enterprise-grade security keeps your data safe and encrypted.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together in real-time with your team members.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description:
        "Get insights into how your audience engages with your content.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "AI-powered tools help you create presentations 10x faster.",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Your content delivered quickly anywhere in the world.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const tabFeatures = {
    design: {
      title: "Beautiful Design Tools",
      description:
        "Create stunning presentations with our intuitive design tools",
      features: [
        { icon: Palette, text: "1000+ professionally designed templates" },
        { icon: Layers, text: "Advanced layering and positioning" },
        { icon: Code, text: "Custom CSS and animations" },
      ],
      image: "🎨",
    },
    collaborate: {
      title: "Seamless Collaboration",
      description: "Work together with your team in real-time",
      features: [
        { icon: Users, text: "Real-time collaboration" },
        { icon: Lock, text: "Role-based permissions" },
        { icon: Cloud, text: "Cloud sync across devices" },
      ],
      image: "👥",
    },
    analytics: {
      title: "Powerful Analytics",
      description: "Understand your audience with detailed insights",
      features: [
        { icon: BarChart, text: "Engagement tracking" },
        { icon: Globe, text: "Geographic analytics" },
        { icon: Smartphone, text: "Device analytics" },
      ],
      image: "📊",
    },
  };

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features that help you create, collaborate, and deliver
            amazing presentations that captivate your audience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="collaborate">Collaborate</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {Object.entries(tabFeatures).map(([key, feature]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {feature.description}
                        </p>
                        <div className="space-y-4">
                          {feature.features.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <item.icon className="w-4 h-4 text-primary" />
                              </div>
                              <span>{item.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-8xl">{feature.image}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
