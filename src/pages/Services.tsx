import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import serviceImage from "@/assets/service-wound-care.jpg";

const woundCareServices = [
  {
    title: "Diabetes Foot Ulcer",
    description: "Specialized care for diabetic foot complications with advanced wound healing techniques.",
  },
  {
    title: "Lower Leg Ulcers",
    description: "Comprehensive treatment for venous and arterial lower leg ulcers.",
  },
  {
    title: "Pressure Sore",
    description: "Prevention and treatment of pressure ulcers with modern wound care methods.",
  },
  {
    title: "NPWT Vac Therapy",
    description: "Negative Pressure Wound Therapy for accelerated wound healing.",
  },
  {
    title: "Venous/Arterial Ulcer",
    description: "Expert management of vascular-related wounds on lower extremities.",
  },
  {
    title: "Soft Tissue Injuries/Infections",
    description: "Treatment of infected wounds and soft tissue damage.",
  },
  {
    title: "Non-Healing Traumatic Wounds",
    description: "Advanced interventions for chronic non-healing wounds.",
  },
  {
    title: "Post-Surgical Wounds, Trauma & Burns",
    description: "Comprehensive care for surgical wounds, trauma injuries, and burn wounds.",
  },
];

const additionalServices = [
  "Medical Consultation",
  "Family Planning",
  "DNP/IV Therapy",
  "Immunization",
  "HIV Testing & Counseling",
  "Blood Specimen Collection",
  "Aesthetic Services (Cash Only)",
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-teal-light">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Professional Wound Care Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg"
            >
              We provide comprehensive wound care services using advanced
              techniques and evidence-based treatments. All services available in
              the comfort of your home.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={serviceImage}
                alt="Wound care service"
                className="rounded-2xl shadow-card w-full"
              />
            </motion.div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                Advanced Wound Care
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8">
                Our specialized wound care services are designed to promote
                healing and prevent complications. We use the latest techniques
                and products to ensure optimal outcomes for our patients.
              </p>
              <ul className="space-y-3">
                {["Evidence-based treatment protocols", "Sterile wound management", "Regular progress monitoring", "Patient education and support"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {woundCareServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-hero-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4"
            >
              Additional Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Beyond wound care, we offer a range of healthcare services to
              support your overall wellbeing.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-card rounded-full shadow-soft text-foreground font-medium text-sm sm:text-base"
              >
                {service}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="hero" size="lg">
              <Link to="/bookings">Book a Service</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
