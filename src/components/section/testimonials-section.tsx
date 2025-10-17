import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
} from "@/components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "https://i.pravatar.cc/150?img=1",
      content:
        "This platform has completely transformed how we create and deliver presentations. The collaboration features are game-changing!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://i.pravatar.cc/150?img=2",
      content:
        "The templates are beautiful and the analytics help us understand our audience better. Highly recommend!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CEO",
      company: "StartupXYZ",
      image: "https://i.pravatar.cc/150?img=3",
      content:
        "We've saved countless hours using this tool. The AI features are incredible and the results are always professional.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Design Lead",
      company: "Creative Studio",
      image: "https://i.pravatar.cc/150?img=4",
      content:
        "As a designer, I appreciate the attention to detail and the flexibility this platform offers. It's simply the best!",
      rating: 5,
    },
  ];

  const logos = [
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "🪟" },
    { name: "Amazon", logo: "📦" },
    { name: "Apple", logo: "🍎" },
    { name: "Meta", logo: "👤" },
    { name: "Netflix", logo: "🎬" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              thousands
            </span>{" "}
            of teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with our
            platform
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 lg:p-12">
                  <Quote className="w-12 h-12 text-primary/20 mb-6" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonials[currentIndex].image} />
                      <AvatarFallback>
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} at{" "}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 transition-all"
              >
                <span className="text-3xl">{logo.logo}</span>
                <span className="text-xl font-semibold text-muted-foreground">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
