import { Badge, Card } from "@/components/ui";
import { COMPARISON_FEATURES, COMPETITORS } from "@/lib/constants";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const ComparisonSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Comparison
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See how we{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              stack up
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why settle for less? Compare our features with the competition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden py-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-medium">Features</th>
                    {COMPETITORS.map((comp, index) => (
                      <th key={index} className="text-center p-4 min-w-[120px]">
                        <div className="flex flex-col items-center gap-2">
                          <span className="font-medium">{comp.name}</span>
                          {comp.isUs && (
                            <Badge className="bg-gradient-to-r from-primary to-secondary">
                              Recommended
                            </Badge>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_FEATURES.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.05 }}
                      className="border-b hover:bg-muted/30 transition-colors"
                    >
                      <td className="p-4 font-medium">{item.feature}</td>
                      <td className="text-center p-4">
                        {item.us ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                              <Check className="w-5 h-5 text-green-500" />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                              <X className="w-5 h-5 text-muted-foreground" />
                            </div>
                          </div>
                        )}
                      </td>
                      {item.others.map((has, idx) => (
                        <td key={idx} className="text-center p-4">
                          <div className="flex justify-center">
                            {has ? (
                              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                <Check className="w-5 h-5 text-green-500" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                <X className="w-5 h-5 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
