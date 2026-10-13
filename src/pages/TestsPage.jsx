import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  Clock, 
  Sparkles, 
  Compass, 
  BookOpen, 
  ChevronRight,
  TrendingUp,
  Brain,
  X
} from 'lucide-react';
import { testsData } from '../data/testsData';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

export default function TestsPage() {
  const [activeTestKey, setActiveTestKey] = useState('adultsGrammar');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);

  const activeTest = testsData[activeTestKey];
  const questions = activeTest.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectOption = (questionId, optionIndex, style = null) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: { optionIndex, style }
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setTestCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTestCompleted(false);
  };

  const switchTest = (key) => {
    setActiveTestKey(key);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setTestCompleted(false);
  };

  // Score Calculation
  const calculateResults = () => {
    if (activeTestKey === 'leadership') {
      const counts = { autocratic: 0, democratic: 0, transformational: 0, 'laissez-faire': 0 };
      Object.values(selectedAnswers).forEach((ans) => {
        if (ans && ans.style && counts[ans.style] !== undefined) {
          counts[ans.style]++;
        }
      });
      const total = Object.keys(selectedAnswers).length || 1;
      let dominant = 'democratic';
      let maxCount = -1;
      Object.entries(counts).forEach(([style, count]) => {
        if (count > maxCount) {
          maxCount = count;
          dominant = style;
        }
      });
      return { type: 'leadership', counts, dominant, total };
    } else {
      let correct = 0;
      questions.forEach((q) => {
        const userAns = selectedAnswers[q.id];
        if (userAns && userAns.optionIndex === q.correctIndex) {
          correct++;
        }
      });
      const percent = Math.round((correct / questions.length) * 100);
      return { type: 'grammar', score: correct, total: questions.length, percent };
    }
  };

  const results = testCompleted ? calculateResults() : null;

  return (
    <div className="py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-800 inline-block">
          Skill Tests
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          English & Leadership Tests
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Benchmark your English grammar, test readiness, or managerial style with The Consistent Academy's interactive tests. Instant scoring with tailored course recommendations.
        </p>
      </section>

      {/* Test Switcher Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              key: 'adultsGrammar',
              title: testsData.adultsGrammar.title,
              badge: testsData.adultsGrammar.badge,
              desc: 'Conditionals, subjunctive, idioms, and advanced syntax.',
              icon: BookOpen
            },
            {
              key: 'leadership',
              title: testsData.leadership.title,
              badge: testsData.leadership.badge,
              desc: 'Evaluate decision-making, delegation, and leadership influence.',
              icon: Compass
            },
            {
              key: 'kidsGrammar',
              title: testsData.kidsGrammar.title,
              badge: testsData.kidsGrammar.badge,
              desc: 'Friendly foundations in articles, tenses, and sentences.',
              icon: Sparkles
            }
          ].map((item) => {
            const Icon = item.icon;
            const isCurrent = activeTestKey === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => switchTest(item.key)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isCurrent
                    ? 'border-brand-600 dark:border-brand-400 bg-white dark:bg-slate-900 ring-2 ring-brand-500 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item.badge}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400'}`} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Test Runner Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm transition-colors">
          {!testCompleted ? (
            <div className="space-y-8">
              {/* Progress & Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/80 px-2.5 py-1 rounded-full border border-brand-200 dark:border-brand-800">
                      {activeTest.badge}
                    </span>
                    <span className="text-xs text-slate-400">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Est. {activeTest.timeLimit}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-600 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Statement */}
              <div className="space-y-2">
                {currentQuestion.section && (
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                    Domain: {currentQuestion.section}
                  </span>
                )}
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, idx) => {
                  const optText = typeof opt === 'string' ? opt : opt.text;
                  const optStyle = typeof opt === 'object' ? opt.style : null;
                  const userAns = selectedAnswers[currentQuestion.id];
                  const hasAnswered = userAns !== undefined;
                  const isSelected = userAns?.optionIndex === idx;
                  const hasCorrectKey = currentQuestion.correctIndex !== undefined;
                  const isCorrect = hasCorrectKey && idx === currentQuestion.correctIndex;
                  const isUserWrong = hasCorrectKey && hasAnswered && isSelected && !isCorrect;

                  let optionStyles = "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300";
                  let badgeStyles = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300";

                  if (hasAnswered) {
                    if (hasCorrectKey) {
                      if (isCorrect) {
                        // Green background for correct answer
                        optionStyles = "border-2 border-emerald-500 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-950 dark:text-emerald-100 font-semibold shadow-xs ring-1 ring-emerald-400";
                        badgeStyles = "bg-emerald-600 text-white";
                      } else if (isUserWrong) {
                        // Red background for user's selected wrong answer
                        optionStyles = "border-2 border-rose-500 bg-rose-100 dark:bg-rose-950/80 text-rose-950 dark:text-rose-100 font-semibold shadow-xs ring-1 ring-rose-400";
                        badgeStyles = "bg-rose-600 text-white";
                      } else {
                        // Other non-selected options become dimmed
                        optionStyles = "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-500 opacity-60";
                        badgeStyles = "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500";
                      }
                    } else {
                      // Leadership assessment: Selected option gets green background
                      if (isSelected) {
                        optionStyles = "border-2 border-emerald-500 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-950 dark:text-emerald-100 font-semibold shadow-xs ring-1 ring-emerald-400";
                        badgeStyles = "bg-emerald-600 text-white";
                      } else {
                        optionStyles = "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-500 opacity-60";
                        badgeStyles = "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500";
                      }
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, idx, optStyle)}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-start justify-between gap-3.5 ${optionStyles}`}
                    >
                      <div className="flex items-start gap-3.5 flex-1">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-colors ${badgeStyles}`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-relaxed">{optText}</span>
                      </div>

                      {hasAnswered && hasCorrectKey && isCorrect && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 dark:text-emerald-200 bg-emerald-200/80 dark:bg-emerald-900/80 px-2.5 py-1 rounded-lg flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Correct</span>
                        </span>
                      )}

                      {hasAnswered && hasCorrectKey && isUserWrong && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-800 dark:text-rose-200 bg-rose-200/80 dark:bg-rose-900/80 px-2.5 py-1 rounded-lg flex-shrink-0">
                          <X className="w-3.5 h-3.5" />
                          <span>Incorrect</span>
                        </span>
                      )}

                      {hasAnswered && !hasCorrectKey && isSelected && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 dark:text-emerald-200 bg-emerald-200/80 dark:bg-emerald-900/80 px-2.5 py-1 rounded-lg flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Selected</span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Instant Answer Feedback Banner */}
              {selectedAnswers[currentQuestion.id] !== undefined && currentQuestion.correctIndex !== undefined && (
                <div className={`p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 transition-all ${
                  selectedAnswers[currentQuestion.id].optionIndex === currentQuestion.correctIndex
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                    : 'bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-950 dark:text-rose-100'
                }`}>
                  {selectedAnswers[currentQuestion.id].optionIndex === currentQuestion.correctIndex ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-bold">
                      {selectedAnswers[currentQuestion.id].optionIndex === currentQuestion.correctIndex
                        ? 'Spot on! Correct answer.'
                        : `Incorrect choice. The right answer is Option ${String.fromCharCode(65 + currentQuestion.correctIndex)}.`}
                    </p>
                    {currentQuestion.explanation && (
                      <p className="text-xs opacity-90 leading-relaxed">
                        <strong>Explanation:</strong> {currentQuestion.explanation}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Bar */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-2 text-xs text-slate-400 hover:text-slate-600"
                    title="Reset test"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <Button
                    onClick={handleNext}
                    variant="primary"
                    size="md"
                    disabled={selectedAnswers[currentQuestion.id] === undefined}
                  >
                    {currentQuestionIndex === questions.length - 1 ? 'View Assessment Results' : 'Next Question'}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* Result Summary View */
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center space-y-3 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-16 h-16 rounded-full bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 flex items-center justify-center mx-auto border border-brand-200 dark:border-brand-800">
                  <Award className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 dark:bg-brand-950/80 text-brand-800 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                  Assessment Complete
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {activeTest.title} Report
                </h3>
              </div>

              {/* Leadership Results */}
              {results.type === 'leadership' ? (
                <div className="space-y-6">
                  <div className="bg-brand-50/80 dark:bg-brand-950/60 rounded-2xl p-6 border border-brand-200 dark:border-brand-800 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 block mb-1">
                      Dominant Leadership Dimension
                    </span>
                    <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white capitalize">
                      {results.dominant} Style
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto mt-2 leading-relaxed">
                      {results.dominant === 'transformational' && "You lead through inspiring vision, elevated intellectual stimulation, and personal mentoring that rallies people towards high-impact collective goals."}
                      {results.dominant === 'democratic' && "You excel at building consensus, encouraging cross-functional debate, and creating psychological safety where all team voices contribute to decisions."}
                      {results.dominant === 'autocratic' && "You provide strong, unambiguous direction and thrive in fast-paced scenarios where rapid decisions and strict operational discipline are essential."}
                      {results.dominant === 'laissez-faire' && "You believe in radical autonomy, delegating complete authority to trusted specialists and removing bureaucratic roadblocks."}
                    </p>
                  </div>

                  {/* Recommendation */}
                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
                    <h5 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                      Recommended Program at The Consistent Academy:
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      To polish your executive gravitas, articulate strategic directives calmly, and lead boardroom discussions with authority, we recommend our <strong>Advanced English & Leadership Presence for Managers (12 Hours)</strong>.
                    </p>
                    <div className="pt-2">
                      <Button to="/courses" variant="primary" size="sm">
                        Explore Leadership Curriculum
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Grammar Results */
                <div className="space-y-6">
                  <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Your Test Score
                    </span>
                    <div className="text-4xl font-black text-brand-700 dark:text-brand-400">
                      {results.score} / {results.total}
                    </div>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1">
                      Proficiency: {results.percent}% Accuracy
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      {results.percent >= 80 
                        ? "Outstanding foundation! You are primed for Band 7.5+ in academic IELTS with targeted writing and speaking polish." 
                        : "Good baseline! With structured reinforcement in subjunctive structures, prepositions, and coherent connectives, your fluency and band score will accelerate rapidly."}
                    </p>
                  </div>

                  {/* Question-by-Question Review with Explanations */}
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-3">
                      Review & Answer Explanations:
                    </h4>
                    <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                      {questions.map((q, idx) => {
                        const userAns = selectedAnswers[q.id];
                        const isCorrect = userAns && userAns.optionIndex === q.correctIndex;
                        return (
                          <div key={q.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-3 bg-white dark:bg-slate-800/80">
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-bold text-slate-800 dark:text-slate-100 text-sm">
                                {idx + 1}. {q.question}
                              </span>
                              <span className={`px-2.5 py-0.5 rounded font-bold uppercase text-[10px] flex-shrink-0 ${
                                isCorrect ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                              }`}>
                                {isCorrect ? '✓ Correct' : '✕ Incorrect'}
                              </span>
                            </div>

                            {/* Options with Green / Red backgrounds */}
                            <div className="space-y-1.5 pt-1">
                              {q.options.map((opt, optIdx) => {
                                const isThisCorrect = optIdx === q.correctIndex;
                                const isThisUserChoice = userAns && userAns.optionIndex === optIdx;

                                let optBg = 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
                                if (isThisCorrect) {
                                  // Green background for correct answer option
                                  optBg = 'bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-500 text-emerald-950 dark:text-emerald-100 font-semibold shadow-2xs';
                                } else if (isThisUserChoice && !isThisCorrect) {
                                  // Red background for user's incorrect choice
                                  optBg = 'bg-rose-100 dark:bg-rose-950/80 border-2 border-rose-500 text-rose-950 dark:text-rose-100 font-semibold shadow-2xs';
                                }

                                return (
                                  <div key={optIdx} className={`p-2.5 rounded-lg border text-xs flex items-center justify-between gap-2 ${optBg}`}>
                                    <div className="flex items-center gap-2 flex-1">
                                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
                                        isThisCorrect 
                                          ? 'bg-emerald-600 text-white' 
                                          : isThisUserChoice 
                                            ? 'bg-rose-600 text-white' 
                                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                                      }`}>
                                        {String.fromCharCode(65 + optIdx)}
                                      </span>
                                      <span className="leading-snug">{typeof opt === 'string' ? opt : opt.text}</span>
                                    </div>

                                    {isThisCorrect && (
                                      <span className="text-[10px] font-bold uppercase text-emerald-800 dark:text-emerald-200 bg-emerald-200/80 dark:bg-emerald-900/80 px-2 py-0.5 rounded flex-shrink-0">
                                        Correct
                                      </span>
                                    )}

                                    {isThisUserChoice && !isThisCorrect && (
                                      <span className="text-[10px] font-bold uppercase text-rose-800 dark:text-rose-200 bg-rose-200/80 dark:bg-rose-900/80 px-2 py-0.5 rounded flex-shrink-0">
                                        Your Choice
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>

                            {q.explanation && (
                              <p className="text-slate-500 dark:text-slate-400 italic pt-1 border-t border-slate-100 dark:border-slate-700/60 text-[11px]">
                                <strong>Explanation:</strong> {q.explanation}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>

                <div className="flex gap-2 w-full sm:w-auto">
                  <Button to="/contact" variant="primary" size="md" className="w-full sm:w-auto">
                    Discuss Results with Mentor
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
