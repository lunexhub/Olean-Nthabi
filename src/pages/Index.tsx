import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Phone, Home, Clock, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-wound-care.jpg";

const services = [
  "Diabetes Foot Ulcer",
  "Lower Leg Ulcers",
  "Pressure Sore",
  "NPWT Vac Therapy",
  "Venous/Arterial Ulcer",
  "Soft Tissue Injuries",
  "Non-Healing Traumatic Wounds",
  "Post-Surgical Wounds & Burns",
];

const features = [
  {
    icon: Home,
    title: "Home Visits",
    description: "Receive professional care in the comfort of your own home",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book appointments that fit your schedule",
  },
  {
    icon: Award,
    title: "Expert Care",
    description: "Registered nurse with advanced wound care specialization",
  },
  {
    icon: Heart,
    title: "Compassionate Service",
    description: "Dedicated to healing wounds and restoring lives",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional wound care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6"
            >
              Advanced Wound Care Specialist
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight"
            >
              Healing Wounds,{" "}
              <span className="text-primary">Restoring Lives</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed"
            >
              Professional wound care treatment delivered to the comfort of your
              home. Cash and Medical Aid accepted.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/bookings">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                <a href="tel:0711868781">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-teal-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-shadow"
              >
                <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Specialized Wound Care Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              We provide comprehensive wound care solutions with advanced techniques
              and personalized treatment plans.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{service}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
          >
            Ready to Start Your Healing Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto px-4"
          >
            Contact us today to schedule your appointment and experience
            professional wound care at home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/bookings">Book Now</Link>
            </Button>
            <Button
              asChild
              size="xl"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            >
              <a href="tel:0711868781">
                <Phone className="w-5 h-5" />
                0711 868 781
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
