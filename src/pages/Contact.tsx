import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "0711 868 781",
    href: "tel:0711868781",
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Oleanthabi53@gmail.com",
    href: "mailto:Oleanthabi53@gmail.com",
    description: "Send us your enquiries",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Home Visits Available",
    href: null,
    description: "We come to you in South Africa",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    value: "Mon - Sat: 8:00 - 17:00",
    href: null,
    description: "Emergency calls available",
  },
];

const Contact = () => {
  const whatsappUrl = "https://wa.me/27711868781?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20wound%20care%20services.";

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
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg"
            >
              Have questions about our services? We're here to help. Reach out to
              us through any of the channels below.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-0">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-hover transition-shadow"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-hero-gradient rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-2">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-primary font-medium text-base sm:text-lg hover:underline block mb-2 break-words"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium text-base sm:text-lg mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-muted-foreground text-sm sm:text-base">{info.description}</p>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-8 sm:mt-12"
          >
            <div className="bg-[#25D366]/10 rounded-3xl p-6 sm:p-8 md:p-12 text-center mx-2 sm:mx-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">
                Chat with Us on WhatsApp
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base px-4">
                Get quick responses to your questions. Send us a message on
                WhatsApp and we'll get back to you as soon as possible.
              </p>
              <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto sm:h-12 sm:text-base">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Start WhatsApp Chat</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practitioner Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Practitioner Information
            </h2>
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card">
              <p className="text-base sm:text-lg font-medium text-foreground mb-2">
                Sr O. Mabokela
              </p>
              <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Advanced Wound Care Specialist
              </p>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                Practice Number: 1215442
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button asChild variant="hero">
                  <Link to="/bookings">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/staff">View Profile</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
