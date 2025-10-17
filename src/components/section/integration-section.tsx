import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const IntegrationsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const integrations = [
    { name: "Slack", icon: "💬", category: "Communication" },
    { name: "Google Drive", icon: "📁", category: "Storage" },
    { name: "Zoom", icon: "📹", category: "Video" },
    { name: "Figma", icon: "🎨", category: "Design" },
    { name: "Notion", icon: "📝", category: "Productivity" },
    { name: "GitHub", icon: "🐙", category: "Development" },
    { name: "Dropbox", icon: "📦", category: "Storage" },
    { name: "Microsoft Teams", icon: "👥", category: "Communication" },
    { name: "Jira", icon: "📊", category: "Project Management" },
    { name: "Salesforce", icon: "☁️", category: "CRM" },
    { name: "HubSpot", icon: "🔧", category: "Marketing" },
    { name: "Stripe", icon: "💳", category: "Payments" },
  ];

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Integrations
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Connect with your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              favorite tools
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with the tools you already use and love
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="p-4 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </div>
                  <div>
                    <p className="font-medium">{integration.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {integration.category}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg" className="group">
            View All Integrations
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
