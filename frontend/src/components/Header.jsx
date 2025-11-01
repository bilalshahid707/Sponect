import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        duration:0.5
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { stiffness: 70 } },
  };

  return (
    <header className="w-full px-3 sm:px-8">
      {/* Animated Header Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`max-w-7xl mx-auto rounded-4xl rounded-tl-none rounded-tr-none bg-dark px-[var(--space-lg)] sm:px-[var(--space-xl)] lg:px-[var(--space-2xl)] py-[var(--space-md)] flex items-center justify-between`}
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="text-white font-bold text-xl">
          Logo
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav variants={itemVariants} className="hidden md:flex">
          <ul className="flex space-x-[var(--space-xl)] text-white text-base font-medium">
            <li>
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-primary transition-colors">
                How it works
              </a>
            </li>
          </ul>
        </motion.nav>

        {/* CTA Button (Desktop only) */}
        <motion.div variants={itemVariants} className="hidden md:block">
          <button className="inline-flex items-center gap-[var(--space-sm)] rounded-xl bg-primary hover:bg-primary-hover text-white text-base sm:text-lg font-medium px-[var(--space-lg)] py-3 shadow-lg transition-all">
            Join the waitlist ↓
          </button>
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.button
          variants={itemVariants}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="bg-dark rounded-4xl mt-3 p-[var(--space-lg)] md:hidden"
        >
          <ul className="space-y-[var(--space-lg)] text-white text-lg font-medium">
            <li>
              <a href="#home" className="block hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:text-primary transition-colors">
                About us
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="block hover:text-primary transition-colors">
                How it works
              </a>
            </li>
          </ul>

          {/* CTA Button in mobile menu */}
          <div className="mt-[var(--space-lg)]">
            <button className="inline-flex items-center gap-[var(--space-sm)] rounded-xl bg-primary hover:bg-primary-hover text-white text-base sm:text-lg font-medium px-[var(--space-lg)] py-3 shadow-lg transition-all">
              Join the waitlist ↓
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
