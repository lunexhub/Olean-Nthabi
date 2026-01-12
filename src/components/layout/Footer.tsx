import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Oleanthabi Wound Care" 
              className="h-12 sm:h-16 w-auto"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Healing Wounds, Restoring Lives. Professional advanced wound care treatment in the comfort of your home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Our Services</Link>
              <Link to="/staff" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Our Team</Link>
              <Link to="/bookings" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">Book Appointment</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-primary-foreground/70 text-sm">Diabetes Foot Ulcer</span>
              <span className="text-primary-foreground/70 text-sm">Pressure Sore Care</span>
              <span className="text-primary-foreground/70 text-sm">NPWT Vac Therapy</span>
              <span className="text-primary-foreground/70 text-sm">Post-Surgical Wounds</span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:0711868781" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" />
                0711 868 781
              </a>
              <a href="mailto:Oleanthabi53@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 text-primary" />
                Oleanthabi53@gmail.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Home visits available<br />South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-primary-foreground/50 text-xs sm:text-sm text-center md:text-left">
            © 2024 Oleanthabi Wound Care. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-xs sm:text-sm text-center">
            Built by <a href="https://www.lunexweb.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lunexweb</a>
          </p>
          <p className="text-primary-foreground/50 text-xs sm:text-sm text-center md:text-right">
            Sr O. Mabokela - Practice Nr: 1215442
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
