import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare, 
  Info,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { contactData } from '../data/contactData';
import { adultCourses, kidsCourses } from '../data/coursesData';
import Button from '../components/common/Button';

export default function ContactPage() {
  const location = useLocation();

  // Parse course from query string if available
  const queryParams = new URLSearchParams(location.search);
  const defaultCourse = queryParams.get('course') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: defaultCourse,
    learningGoals: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)'
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim() || phoneClean.length < 10) {
      errs.phone = 'Please provide a valid 10-digit contact number.';
    }
    if (!formData.course) {
      errs.course = 'Please choose a course of interest.';
    }
    if (!formData.learningGoals.trim() || formData.learningGoals.trim().length < 10) {
      errs.learningGoals = 'Please describe your learning goals or target band score (min 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmittedData({
        ...formData,
        referenceId: `TCA-${Math.floor(100000 + Math.random() * 900000)}`,
        submittedAt: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        learningGoals: '',
        preferredTime: 'Morning (10:00 AM - 1:00 PM)'
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
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-800 border border-brand-200 inline-block">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact The Consistent Academy
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Reach out directly to Vidya Wankhade and our course advisory team in Pune. We are here to answer all your queries regarding course curriculum, batch timings, and IELTS preparation.
        </p>
      </section>

      {/* Main Grid: Form + Verified Contact Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Validated Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Send an Enquiry or Consultation Request
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details and target requirements below.
                </p>
              </div>
            </div>

            {/* Prototype Demo Notice */}
            <div className="mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Demo Notice:</strong> This prototype runs client-side validation. Submissions generate an instant demo reference ticket and will not write to a remote production database without backend deployment.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ninoshka Deshmukh"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                    errors.name 
                      ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                      : 'border-slate-200 focus:ring-brand-400 focus:border-brand-600 bg-slate-50/50'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                        : 'border-slate-200 focus:ring-brand-400 focus:border-brand-600 bg-slate-50/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      errors.phone 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                        : 'border-slate-200 focus:ring-brand-400 focus:border-brand-600 bg-slate-50/50'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Course Selector & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Course of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 ${
                      errors.course 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                        : 'border-slate-200 focus:ring-brand-400 focus:border-brand-600 bg-slate-50/50'
                    }`}
                  >
                    <option value="">-- Select a Course --</option>
                    <optgroup label="Adults & Professional Programs">
                      {adultCourses.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Young Learners & Kids">
                      {kidsCourses.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                  {errors.course && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.course}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Batch Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-600"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:30 PM - 7:30 PM)">Evening (5:30 PM - 7:30 PM)</option>
                    <option value="Weekend Intensive Batch">Weekend Intensive Batch</option>
                  </select>
                </div>
              </div>

              {/* Message / Learning Goals */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Your Goals & Timeline <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="learningGoals"
                  rows={4}
                  value={formData.learningGoals}
                  onChange={handleChange}
                  placeholder="Tell us about your target IELTS band score, exam date, destination country, or specific communication challenges..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 resize-none ${
                    errors.learningGoals 
                      ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                      : 'border-slate-200 focus:ring-brand-400 focus:border-brand-600 bg-slate-50/50'
                  }`}
                />
                {errors.learningGoals && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.learningGoals}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-md font-bold"
                icon={Send}
                disabled={submitting}
              >
                {submitting ? 'Validating Submission...' : 'Submit Enquiry & Book Consultation'}
              </Button>
            </form>
          </div>

          {/* Right Column: Verified Details & Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg border border-slate-800">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Verified Academy Contacts
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-bold block">
                      Direct Phone / WhatsApp
                    </span>
                    <a
                      href={contactData.phoneHref}
                      className="text-base font-bold text-white hover:text-brand-300 transition-colors"
                    >
                      {contactData.phone}
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Call for instant batch availability
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-bold block">
                      Official Academy Email
                    </span>
                    <a
                      href={contactData.emailHref}
                      className="text-sm font-semibold text-white hover:text-brand-300 transition-colors break-all"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-bold block">
                      Location
                    </span>
                    <p className="text-sm text-white font-semibold">
                      {contactData.displayAddress}, India
                    </p>
                    <a
                      href={contactData.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-teal-300 hover:text-teal-200 mt-1 font-medium"
                    >
                      <span>Open Directions in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase text-slate-400 font-bold block">
                      Counseling & Batch Hours
                    </span>
                    <p className="text-xs text-slate-300">
                      {contactData.workingHours}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {contactData.sundayHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm p-2">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="The Consistent Academy Pune Location"
                  src={contactData.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-3 text-center">
                <a
                  href={contactData.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-700 hover:text-brand-800 inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Driving Directions to Pune Academy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Success Confirmation Modal */}
      {submittedData && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 space-y-5 text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-800 uppercase tracking-wider">
                Ref: {submittedData.referenceId}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                Enquiry Received Successfully!
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Thank you, <strong>{submittedData.name}</strong>. Our academic team at The Consistent Academy will review your goals and contact you shortly.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs space-y-2 border border-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-500">Program:</span>
                <span className="font-bold text-slate-800">{submittedData.course}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact:</span>
                <span className="font-bold text-slate-800">{submittedData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time Preference:</span>
                <span className="font-bold text-slate-800">{submittedData.preferredTime}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={contactData.phoneHref}
                className="flex-1 py-3 px-4 rounded-xl bg-brand-700 text-white font-bold text-sm hover:bg-brand-800 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {contactData.phone}</span>
              </a>
              <button
                onClick={() => setSubmittedData(null)}
                className="py-3 px-6 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
