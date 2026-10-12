import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { contactData } from '../../data/contactData';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Founder', path: '/#founder' },
    { name: 'Tests & Diagnostic', path: '/tests' },
    { name: 'Speaking Club', path: '/club' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const handleNavClick = (e, path) => {
    if (path === '/#founder') {
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById('founder');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', '/#founder');
        }
      }
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path === '/#founder') return location.hash === '#founder';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-shadow duration-300">
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href={contactData.phoneHref}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call The Consistent Academy"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>{contactData.phone}</span>
            </a>
            <a 
              href={contactData.emailHref}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              title="Email The Consistent Academy"
            >
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              <span>{contactData.email}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>{contactData.displayAddress}</span>
            </span>
          </div>

          {/* Prominent ThinkBuild Designer & Developer Badge */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.thinkbuild.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700/90 border border-slate-700 hover:border-brand-500/70 text-slate-300 hover:text-white transition-all duration-200 text-xs shadow-xs"
              title="Designed and developed by Think build"
              aria-label="Designed and developed by Think build (opens in new tab)"
            >
              <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors">
                Designed & Developed by
              </span>
              <div className="flex items-center gap-1.5">
                <img
                  src="/assets/academy/thinkbuild-logo.png"
                  alt="Think Build Logo"
                  className="h-4 w-auto object-contain rounded-xs transition-transform duration-200 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <span className="font-bold text-teal-300 group-hover:text-teal-200 transition-colors">
                  Think build
                </span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-teal-200 transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-white transition-all duration-200 ${scrolled ? 'shadow-md py-2.5' : 'border-b border-slate-100 py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
            <img
              src="/assets/academy/logo.png"
              alt="The Consistent Academy Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/academy/logo2.png';
              }}
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-brand-700 transition-colors">
                The Consistent Academy
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-brand-600 tracking-wider uppercase mt-0.5">
                IELTS & English Mastery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'text-brand-700 bg-brand-50 shadow-sm'
                      : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Consultation Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowRight}
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => {
                      handleNavClick(e, link.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      active
                        ? 'text-brand-700 bg-brand-50 font-bold'
                        : 'text-slate-700 hover:text-brand-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={ArrowRight}
              >
                Enquire Now
              </Button>
              <a
                href={contactData.phoneHref}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call: {contactData.phone}</span>
              </a>
              <a
                href="https://www.thinkbuild.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs"
              >
                <span className="text-slate-400">Designed & Developed by</span>
                <img
                  src="/assets/academy/thinkbuild-logo.png"
                  alt="Think Build Logo"
                  className="h-4 w-auto object-contain rounded-xs"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <span className="font-bold text-teal-300">Think build</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
