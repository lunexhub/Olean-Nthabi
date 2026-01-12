import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CallButton = () => {
  const phoneNumber = "0711868781";
  const telUrl = `tel:${phoneNumber}`;

  return (
    <motion.a
      href={telUrl}
      className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-primary animate-ping opacity-30" />
      
      {/* Tooltip */}
      <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-foreground text-primary-foreground text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Call Us Now
      </span>
    </motion.a>
  );
};

export default CallButton;

