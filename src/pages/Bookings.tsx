import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { toast } from "sonner";

const services = [
  "Diabetes Foot Ulcer Care",
  "Lower Leg Ulcer Treatment",
  "Pressure Sore Management",
  "NPWT Vac Therapy",
  "Venous/Arterial Ulcer Care",
  "Soft Tissue Injury Treatment",
  "Post-Surgical Wound Care",
  "Medical Consultation",
  "Other Service",
];

const timeSlots = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

const Bookings = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In a real app, this would send to a backend
    setIsSubmitted(true);
    toast.success("Booking request submitted successfully!");
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-12 sm:py-16 md:py-20 min-h-[70vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center"
            >
              <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Booking Received!
              </h1>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Thank you for your booking request. We will contact you shortly to
                confirm your appointment.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Make Another Booking
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

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
              Book Appointment
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Schedule Your Visit
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg"
            >
              Book your home visit appointment online. We'll confirm your booking
              within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl shadow-card p-6 sm:p-8 md:p-12"
            >
              <div className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email (optional)"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12"
                  />
                </div>

                {/* Appointment Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="h-12"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Preferred Time *
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) =>
                        setFormData({ ...formData, time: value })
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    Service Required *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your wound or condition..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    Submit Booking Request
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  Cash and Medical Aid accepted. We'll call to confirm your
                  appointment within 24 hours.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bookings;
