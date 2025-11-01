import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  // Container animation (footer slides up on view)
  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 60,
        damping: 20,
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { stiffness: 70 },
    },
  };

  return (
    <section className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container bg-dark !rounded-b-none"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-[var(--space-xl)]"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-white font-bold text-3xl">
            Logo
          </motion.div>

          {/* Footer Columns */}
          <motion.div
            variants={itemVariants}
            className="flex items-start justify-between flex-col md:flex-row gap-[var(--space-xl)] md:gap-[var(--space-lg)]"
          >
            {/* Contact Us */}
            <motion.div variants={itemVariants} className="flex flex-col gap-[var(--space-md)] flex-1">
              <h3 className="heading-tertiary text-white border-b-2 border-primary">Contact Us</h3>
              <a
                href="mailto:info@sponect.com"
                className="body-text text-white flex gap-[var(--space-sm)] items-center hover:text-primary transition-colors"
              >
                <i className="bi bi-envelope-fill text-xl flex-shrink-0"></i>
                <span>info@sponect.com</span>
              </a>
              <a
                href="tel:+92123456789"
                className="body-text text-white flex gap-[var(--space-sm)] items-center hover:text-primary transition-colors"
              >
                <i className="bi bi-telephone-fill text-xl flex-shrink-0"></i>
                <span>+92 123 456 7890</span>
              </a>
              <p className="body-text text-white flex gap-[var(--space-sm)] items-start">
                <i className="bi bi-geo-alt-fill text-xl flex-shrink-0 mt-1"></i>
                <span>Islamabad, Pakistan</span>
              </p>
            </motion.div>

            {/* Menu */}
            <motion.div variants={itemVariants} className="flex flex-col gap-[var(--space-md)] flex-1">
              <h3 className="heading-tertiary text-white border-b-2 border-primary">Menu</h3>
              <a href="#home" className="body-text text-white hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="body-text text-white hover:text-primary transition-colors">
                About us
              </a>
              <a href="#how-it-works" className="body-text text-white hover:text-primary transition-colors">
                How it works
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex flex-col gap-[var(--space-md)] flex-1">
              <h3 className="heading-tertiary text-white border-b-2 border-primary">Socials</h3>

              <div className="flex items-center gap-[var(--space-xl)] justify-center">
                {[
                  { icon: "facebook", url: "https://facebook.com" },
                  { icon: "twitter-x", url: "https://twitter.com" },
                  { icon: "instagram", url: "https://instagram.com" },
                  { icon: "linkedin", url: "https://linkedin.com" },
                ].map(({ icon, url }) => (
                  <motion.a
                    key={icon}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-text text-white flex gap-[var(--space-sm)] items-center hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`bi bi-${icon} text-3xl flex-shrink-0`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          variants={itemVariants}
          className="w-full h-1 bg-primary rounded-full mt-[var(--space-xl)]"
        ></motion.div>

        {/* Footer Bottom */}
        <motion.footer
          variants={itemVariants}
          className="w-full mt-[var(--space-lg)] flex items-center justify-center"
        >
          <p className="body-text text-white text-center w-full">
            &copy; {new Date().getFullYear()} Sponect. All rights reserved.
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default Footer;
