import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/JSLogo.svg';
import menuIcon from '../../assets/Menu.svg';
import menuCloseIcon from '../../assets/MenuClose.svg';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinksVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.3 } },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const menuIconVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.nav
      style={{
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem',
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(18px) saturate(180%)',
        WebkitBackdropFilter: 'blur(18px) saturate(180%)',
        color: 'var(--color-primary-text)',
        zIndex: 1000,
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: '40px' }} />
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{
              display: 'flex',
              gap: '2rem',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            variants={navLinksVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{ color: 'var(--primaryText)', textDecoration: 'none' }}
                variants={linkItemVariants}
                whileHover={{ scale: 1.1, color: 'var(--accent)' }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu Icon */}
      <motion.div
        style={{ display: 'flex', alignItems: 'center', zIndex: 1100 }}
        variants={menuIconVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <img
          src={menuOpen ? menuCloseIcon : menuIcon}
          alt="Menu"
          style={{ height: '35px', cursor: 'pointer' }}
          onClick={toggleMenu}
        />
      </motion.div>
    </motion.nav>
  );
};
