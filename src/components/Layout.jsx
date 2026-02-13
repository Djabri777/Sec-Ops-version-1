import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Lock, Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#020617] text-zinc-100' : 'bg-white text-slate-950'}`}>
      {/* Glassmorphic Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-100/80 border-slate-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Shield className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'} group-hover:text-blue-300 transition-colors`} strokeWidth={2} />
                <div className="absolute inset-0 blur-xl bg-blue-400/30 group-hover:bg-blue-400/50 transition-all"></div>
              </div>
              <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-zinc-100' : 'text-slate-950'}`}>SecOps</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    isActive(link.path)
                      ? darkMode ? 'text-blue-400' : 'text-blue-600'
                      : darkMode ? 'text-zinc-300 hover:text-zinc-100' : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side: Theme Toggle + CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-slate-200 hover:bg-slate-300 border-slate-300'} border transition-all`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-zinc-300" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>
              <Link
                to="/signin"
                className={`transition-colors ${darkMode ? 'text-zinc-300 hover:text-zinc-100' : 'text-slate-700 hover:text-slate-950'}`}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className={`px-6 py-2 rounded-lg font-medium transition-all ${darkMode ? 'bg-blue-500 hover:bg-blue-600 text-zinc-100 hover:shadow-lg hover:shadow-blue-500/25' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${darkMode ? 'text-zinc-100' : 'text-slate-950'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 space-y-4 border-t ${darkMode ? 'border-white/10' : 'border-slate-200'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block transition-colors ${
                    isActive(link.path)
                      ? darkMode ? 'text-blue-400' : 'text-blue-600'
                      : darkMode ? 'text-zinc-300 hover:text-zinc-100' : 'text-slate-700 hover:text-slate-950'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex items-center space-x-2 transition-colors ${darkMode ? 'text-zinc-300 hover:text-zinc-100' : 'text-slate-700 hover:text-slate-950'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span>Toggle Theme</span>
              </button>
              <Link
                to="/signin"
                className={`block transition-colors ${darkMode ? 'text-zinc-300 hover:text-zinc-100' : 'text-slate-700 hover:text-slate-950'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className={`block w-full px-6 py-2 rounded-lg font-medium transition-all text-center ${darkMode ? 'bg-blue-500 hover:bg-blue-600 text-zinc-100' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="pt-16"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Trust Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${darkMode ? 'border-white/10 bg-[#020617]' : 'border-slate-200 bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2">
              <Shield className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`font-bold ${darkMode ? 'text-zinc-100' : 'text-slate-950'}`}>SecOps</span>
            </div>

            <div className={`flex flex-wrap justify-center gap-8 text-sm ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              <Link to="/" className={`transition-colors ${darkMode ? 'hover:text-zinc-100' : 'hover:text-slate-950'}`}>
                Home
              </Link>
              <Link to="/services" className={`transition-colors ${darkMode ? 'hover:text-zinc-100' : 'hover:text-slate-950'}`}>
                Services
              </Link>
              <Link to="/about" className={`transition-colors ${darkMode ? 'hover:text-zinc-100' : 'hover:text-slate-950'}`}>
                About
              </Link>
              <Link to="/contact" className={`transition-colors ${darkMode ? 'hover:text-zinc-100' : 'hover:text-slate-950'}`}>
                Contact
              </Link>
              <a href="#" className={`transition-colors ${darkMode ? 'hover:text-zinc-100' : 'hover:text-slate-950'}`}>
                Privacy Policy
              </a>
              <a href="#" className={`transition-colors ${darkMode ? 'hover:text-zinc-100' : 'hover:text-slate-950'}`}>
                Terms of Service
              </a>
            </div>

            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'}`}>
              <Lock className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-sm font-medium ${darkMode ? 'text-zinc-100' : 'text-slate-950'}`}>Secure by Design</span>
            </div>
          </div>

          <div className={`mt-8 text-center text-sm ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>
            © 2026 SecOps. Empowering Algerian startups with enterprise security.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
