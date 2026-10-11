import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Heart, Award } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from './BrandIcons';
import { contactData } from '../../data/contactData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info & Founder */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/academy/logo2.png"
                alt="The Consistent Academy Logo"
                className="h-10 w-auto object-contain rounded-lg bg-white/5 p-1"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/academy/logo.png';
                }}
              />
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">
                  The Consistent Academy
                </span>
                <span className="text-xs text-brand-400 font-medium">
                  Pune, Maharashtra
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Master English with expert guidance and consistent deliberate practice. Comprehensive IELTS preparation, spoken English, corporate communication, and leadership presence with proven methodology.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <Award className="w-4 h-4 text-brand-400 flex-shrink-0" />
              <span>Founded by Vidya Wankhade (19+ Yrs Exp)</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactData.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Instagram profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={contactData.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="LinkedIn page"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={contactData.socials[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="WhatsApp Community"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Programs & Courses */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Featured Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  IELTS / TOEFL / PTE / CELPIP
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  Corporate Survival & Success
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  Crack Your Interview
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  Corporate Dining & Social Etiquette
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  Advanced English for Managers
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  Kids Foundations & Toastmasters
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Academy Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-400 hover:text-white transition-colors">
                  Course Catalogue
                </Link>
              </li>
              <li>
                <Link to="/tests" className="text-slate-400 hover:text-white transition-colors">
                  English & Leadership Tests
                </Link>
              </li>
              <li>
                <Link to="/club" className="text-slate-400 hover:text-white transition-colors">
                  Consistent Communicators Club
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {contactData.displayAddress}, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a
                  href={contactData.phoneHref}
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a
                  href={contactData.emailHref}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {contactData.email}
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-400 leading-normal border-t border-slate-800">
                <span className="text-slate-300 font-semibold block">Hours:</span>
                {contactData.workingHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {contactData.academyName}. All rights reserved.
          </p>

          {/* Mandatory ThinkBuild credit */}
          <div className="flex items-center gap-1.5">
            <span>Website developed by</span>
            <a
              href="https://www.thinkbuild.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 font-semibold underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
            >
              <span>ThinkBuild</span>
              <ExternalLink className="w-3 h-3 inline-block" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
