import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Award, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  ShieldCheck,
  Send,
  Info
} from 'lucide-react';
import { clubData } from '../data/clubData';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export default function ClubPage() {
  const [memberForm, setMemberForm] = useState({
    name: '',
    email: '',
    phone: '',
    college: 'iFEEL',
    role: 'Student Member',
    speechInterest: 'Extempore & Impromptu'
  });

  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!memberForm.name.trim() || !memberForm.email.trim()) return;
    setRegistered(true);
  };

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-800 border border-brand-200">
          <Award className="w-4 h-4 text-brand-600" />
          <span>{clubData.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Consistent Communicators Club
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {clubData.description}
        </p>

        {/* Established Partner Callout */}
        <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
          <Building2 className="w-4 h-4 text-teal-600" />
          <span>In Academic Partnership with {clubData.establishedPartner}</span>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xl">
          {clubData.stats.map((st, idx) => (
            <div key={idx}>
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-300">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars of Transformation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Core Pillars"
          title="The 4 Pillars of Speaking Mastery"
          subtitle="Our systematic methodology moves students from stuttering stage fright into spontaneous, articulate communicators ready for interviews and keynotes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand-800 font-extrabold text-sm flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter Roles & Hierarchy */}
      <section className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership Structure"
            title="Collegiate Chapter Hierarchy & Badges"
            subtitle="Students take on real club management responsibilities, chairing meetings and tracking peer evaluations to build verifiable organizational credentials."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubData.roles.map((r, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1">
                  {r.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Club Interactive Demo Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 inline-block">
              Membership Enrolment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Join Consistent Communicators Club
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Available to undergraduate, postgraduate students and campus partner institutions in Pune.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
            <span>
              <strong>Demo Registration:</strong> Submitting this form tests the simulated membership pipeline for CC Club college chapters.
            </span>
          </div>

          {!registered ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={memberForm.name}
                    onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                    placeholder="e.g. Atharv Kulkarni"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:ring-2 focus:ring-brand-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    College / University Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={memberForm.email}
                    onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
                    placeholder="student@college.edu"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:ring-2 focus:ring-brand-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Institution / Chapter
                  </label>
                  <select
                    value={memberForm.college}
                    onChange={(e) => setMemberForm({ ...memberForm, college: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50"
                  >
                    <option value="iFEEL">iFEEL Campus</option>
                    <option value="Pune University Affiliated">Pune University</option>
                    <option value="Other College / Open Chapter">Other College</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Applying As
                  </label>
                  <select
                    value={memberForm.role}
                    onChange={(e) => setMemberForm({ ...memberForm, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50"
                  >
                    <option value="Student Member">Student Member</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="Event Coordinator">Event Coordinator</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={memberForm.speechInterest}
                    onChange={(e) => setMemberForm({ ...memberForm, speechInterest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50"
                  >
                    <option value="Extempore & Impromptu">Extempore & Impromptu</option>
                    <option value="Campus Placement GD">Placement GD Preparation</option>
                    <option value="Stage Keynotes">Stage Keynote Speaking</option>
                  </select>
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full justify-center shadow-md font-bold"
                icon={Send}
              >
                Join CC Club Chapter
              </Button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-teal-200 text-teal-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Welcome to Consistent Communicators Club, {memberForm.name}!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your registration ticket for <strong>{memberForm.college} Chapter ({memberForm.role})</strong> has been verified. You will receive session reminders via WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setRegistered(false)}
                className="text-xs font-bold text-teal-700 underline"
              >
                Register Another Student
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
