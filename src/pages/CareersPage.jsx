import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  UploadCloud, 
  AlertCircle, 
  Info, 
  Sparkles,
  Users
} from 'lucide-react';
import { careersData } from '../data/careersData';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(careersData[0].title);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: careersData[0].title,
    experience: '1-3 years',
    resumeLink: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim() || phoneClean.length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.resumeLink.trim()) {
      errs.resumeLink = 'Please provide a link to your resume or LinkedIn profile.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle);
    setFormData((prev) => ({ ...prev, role: roleTitle }));
    const formElement = document.getElementById('application-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplicationSuccess({
        ...formData,
        appId: `APP-${Math.floor(100000 + Math.random() * 900000)}`
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        role: careersData[0].title,
        experience: '1-3 years',
        resumeLink: '',
        message: ''
      });
    }, 700);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="py-10 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-800 inline-block">
          Join Our Academic Team
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Careers at The Consistent Academy
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We are always looking for passionate educators and mentors who believe in consistent growth, pedagogical rigor, and meaningful student transformation.
        </p>
      </section>

      {/* Open Positions List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Open Faculty & Support Roles ({careersData.length})
          </h2>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Location: Pune, Maharashtra (Hybrid & On-site)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careersData.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-800">
                    {job.department}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {job.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Responsibilities:
                  </p>
                  {job.responsibilities.slice(0, 3).map((r, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                      <span className="text-brand-500 font-bold">•</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                {/* Requirements */}
                <div className="space-y-1 pt-1">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Ideal Candidate:
                  </p>
                  {job.requirements.slice(0, 2).map((req, qIdx) => (
                    <div key={qIdx} className="flex items-start gap-1.5 text-xs text-teal-800 dark:text-teal-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleApplyClick(job.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-brand-700 dark:hover:bg-brand-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 border border-transparent dark:border-slate-700"
                >
                  <span>Apply for {job.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800 inline-block mb-2">
              Online Application
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Submit Your Profile & Teaching Credentials
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Applying for: <strong className="text-brand-700 dark:text-brand-300">{formData.role}</strong>
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 dark:text-amber-400 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Demo Notice:</strong> Applications are processed locally in this prototype. Upon submitting, a simulated candidate profile ticket will be displayed.
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Anand Kulkarni"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 ${
                    errors.fullName ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="anand@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 ${
                    errors.phone ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.phone}</p>}
              </div>

              {/* Target Role */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Applying For Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                >
                  {careersData.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Years of Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-400"
                >
                  <option value="Fresher / Less than 1 yr">Fresher / Less than 1 yr</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>
            </div>

            {/* Resume / Portfolio Link */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Resume / Portfolio Link (Google Drive / LinkedIn) <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleChange}
                placeholder="https://drive.google.com/... or https://linkedin.com/in/..."
                className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 ${
                  errors.resumeLink ? 'border-red-400 bg-red-50/20 dark:bg-red-950/20' : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800'
                }`}
              />
              {errors.resumeLink && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{errors.resumeLink}</p>}
            </div>

            {/* Teaching Philosophy Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Brief Introduction & Teaching Philosophy
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your IELTS score (if applicable), pedagogical experience, or why you want to mentor students at The Consistent Academy..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-sm text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-md font-bold"
              icon={Send}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Faculty Application'}
            </Button>
          </form>
        </div>
      </section>

      {/* Application Success Modal */}
      {applicationSuccess && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 dark:border-slate-800 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-800 px-3 py-1 rounded-full">
                Candidate ID: {applicationSuccess.appId}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                Application Submitted!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Thank you, <strong>{applicationSuccess.fullName}</strong>. Our academic panel will review your credentials for the position of <strong>{applicationSuccess.role}</strong>.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-left text-xs space-y-1.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
              <p><strong>Position:</strong> {applicationSuccess.role}</p>
              <p><strong>Email:</strong> {applicationSuccess.email}</p>
              <p><strong>Contact:</strong> {applicationSuccess.phone}</p>
            </div>
            <button
              onClick={() => setApplicationSuccess(null)}
              className="w-full py-3 px-6 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700"
            >
              Back to Careers
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
