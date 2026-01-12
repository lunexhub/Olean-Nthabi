import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Heart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import staffMabokela from "@/assets/staff-mabokela.jpg";
import staffNurseMale from "@/assets/staff-nurse-male.jpg";
import staffAssistant from "@/assets/staff-assistant.jpg";

const teamMembers = [
  {
    name: "Sr O. Mabokela",
    role: "Lead Specialist",
    title: "Advanced Wound Care Specialist",
    image: staffMabokela,
    description: "With extensive experience in wound care management, Sr. Mabokela is dedicated to providing compassionate, professional care to patients in the comfort of their homes.",
    qualifications: [
      "Registered Professional Nurse",
      "Advanced Wound Care Specialist",
      "Practice Number: 1215442",
      "Certified in NPWT Therapy",
    ],
    phone: "0711 868 781",
    email: "Oleanthabi53@gmail.com",
  },
  {
    name: "Br T. Ndlovu",
    role: "Wound Care Nurse",
    title: "Registered Professional Nurse",
    image: staffNurseMale,
    description: "Br. Ndlovu brings expertise in wound assessment and treatment, specializing in diabetic wound care and post-surgical wound management.",
    qualifications: [
      "Registered Professional Nurse",
      "Wound Care Certified",
      "IV Therapy Certified",
      "Emergency Care Training",
    ],
    phone: "0711 868 781",
    email: "Oleanthabi53@gmail.com",
  },
  {
    name: "Sr N. Mokoena",
    role: "Healthcare Assistant",
    title: "Nursing Assistant",
    image: staffAssistant,
    description: "Sr. Mokoena provides essential support in patient care, ensuring comfort and proper wound dressing procedures.",
    qualifications: [
      "Certified Nursing Assistant",
      "Wound Dressing Specialist",
      "Patient Care Certified",
      "First Aid Certified",
    ],
    phone: "0711 868 781",
    email: "Oleanthabi53@gmail.com",
  },
];

const Staff = () => {
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
              Our Team
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Meet Your Care Providers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg"
            >
              Dedicated professionals committed to providing exceptional wound
              care with compassion and expertise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl shadow-card overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 sm:h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent lg:hidden" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 lg:p-12">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        {member.role}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                        {member.name}
                      </h2>
                      <p className="text-primary font-medium">
                        {member.title}
                      </p>
                    </div>

                    <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                      {member.description}
                    </p>

                    {/* Qualifications */}
                    <div className="mb-8">
                      <h3 className="flex items-center gap-2 font-display font-semibold text-lg text-foreground mb-4">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Qualifications
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {member.qualifications.map((qual) => (
                          <div
                            key={qual}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Award className="w-4 h-4 text-primary flex-shrink-0" />
                            {qual}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3 mb-8">
                      <a
                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        {member.phone}
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-5 h-5 text-primary" />
                        {member.email}
                      </a>
                    </div>

                    <Button asChild variant="hero" size="lg">
                      <Link to="/bookings">Book an Appointment</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4"
            >
              Our Care Philosophy
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "Treating every patient with empathy and understanding",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Delivering the highest standards of wound care",
              },
              {
                icon: GraduationCap,
                title: "Expertise",
                description: "Continuous learning and advanced techniques",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;
