// Authentic Practice Tests from The Consistent Academy

export const testsData = {
  leadership: {
    id: "leadership",
    title: "Leadership Style Assessment",
    badge: "Executive & Management",
    description: "Discover your dominant leadership approach across autocratic, democratic, transformational, and laissez-faire dimensions.",
    timeLimit: "15 mins",
    totalQuestions: 20,
    questions: [
      {
        id: 1,
        question: "When a critical project deadline approaches, how do you make key decisions?",
        section: "Decision-Making",
        options: [
          { text: "I assess the options myself and issue direct instructions to ensure speed.", style: "autocratic" },
          { text: "I call an emergency team huddle and decide based on group consensus.", style: "democratic" },
          { text: "I articulate the overarching vision and inspire team members to rally together.", style: "transformational" },
          { text: "I trust my team members to make their own choices independently.", style: "laissez-faire" }
        ]
      },
      {
        id: 2,
        question: "How do you assign responsibilities and delegate work to team members?",
        section: "Delegation",
        options: [
          { text: "I specify exact procedures, deliverables, and strict review milestones.", style: "autocratic" },
          { text: "I discuss capabilities with team members and let them volunteer for areas of interest.", style: "democratic" },
          { text: "I assign stretch goals that challenge team members to develop new leadership capabilities.", style: "transformational" },
          { text: "I outline the end objective and give complete autonomy over execution.", style: "laissez-faire" }
        ]
      },
      {
        id: 3,
        question: "What is your primary method for motivating team members under pressure?",
        section: "Motivation",
        options: [
          { text: "Establishing clear consequences and strict performance benchmarks.", style: "autocratic" },
          { text: "Creating an open forum where everyone's voice is heard and valued.", style: "democratic" },
          { text: "Connecting their day-to-day work to a compelling higher purpose and career trajectory.", style: "transformational" },
          { text: "Providing necessary resources and staying out of their way so they can excel.", style: "laissez-faire" }
        ]
      },
      {
        id: 4,
        question: "When team members disagree sharply on an execution approach, how do you intervene?",
        section: "Conflict Resolution",
        options: [
          { text: "I make an executive determination and expect both parties to align immediately.", style: "autocratic" },
          { text: "I mediate a structured debate and find an agreed compromise.", style: "democratic" },
          { text: "I reframe the conflict as an opportunity to discover an innovative third solution.", style: "transformational" },
          { text: "I allow the team to resolve interpersonal friction among themselves organically.", style: "laissez-faire" }
        ]
      },
      {
        id: 5,
        question: "How do you prefer to communicate major organizational changes?",
        section: "Change Management",
        options: [
          { text: "Issue clear, unambiguous directives outlining what needs to be done.", style: "autocratic" },
          { text: "Host consultative town halls to gather questions and feedback before finalizing.", style: "democratic" },
          { text: "Paint a vivid picture of the future state and ignite enthusiasm for the change.", style: "transformational" },
          { text: "Share the high-level update and allow individual units to adapt as they see fit.", style: "laissez-faire" }
        ]
      },
      {
        id: 6,
        question: "How do you evaluate performance and provide feedback to direct reports?",
        section: "Evaluation",
        options: [
          { text: "Rigorous evaluation against predefined metrics and direct correction of mistakes.", style: "autocratic" },
          { text: "Mutual 360-degree discussion with collaborative goal-setting.", style: "democratic" },
          { text: "Mentoring sessions focused on holistic personal transformation and long-term potential.", style: "transformational" },
          { text: "Self-assessments submitted periodically with hands-off oversight.", style: "laissez-faire" }
        ]
      },
      {
        id: 7,
        question: "In your view, what defines a truly successful team leader?",
        section: "Philosophy",
        options: [
          { text: "Someone who delivers results with discipline, order, and control.", style: "autocratic" },
          { text: "Someone who fosters equity, collaboration, and shared ownership.", style: "democratic" },
          { text: "Someone who elevates followers into leaders and sparks positive change.", style: "transformational" },
          { text: "Someone who empowers exceptional professionals and steps aside.", style: "laissez-faire" }
        ]
      },
      {
        id: 8,
        question: "When an unexpected crisis occurs, what is your initial reaction?",
        section: "Crisis Management",
        options: [
          { text: "Take immediate unilateral control of the situation and command the response.", style: "autocratic" },
          { text: "Convene relevant leads to rapidly weigh collective insights.", style: "democratic" },
          { text: "Calm the organization, rally belief, and steer towards strategic opportunity.", style: "transformational" },
          { text: "Let designated operational specialists handle their respective domains.", style: "laissez-faire" }
        ]
      }
    ]
  },
  adultsGrammar: {
    id: "adultsGrammar",
    title: "Advanced English Proficiency Test",
    badge: "Adults & Professionals",
    description: "Benchmark your command of advanced English grammar, syntax, idioms, conditionals, and precision phrasing.",
    timeLimit: "12 mins",
    totalQuestions: 15,
    questions: [
      {
        id: 1,
        question: "Neither of the candidates ________ suitable for the executive position.",
        options: ["is", "are", "were", "have been"],
        correctIndex: 0,
        explanation: "'Neither' when used as a pronoun is singular and takes a singular verb ('is')."
      },
      {
        id: 2,
        question: "If I ________ in your position, I would have negotiated the terms beforehand.",
        options: ["was", "were", "had been", "would be"],
        correctIndex: 2,
        explanation: "Third conditional requires 'had been' in the if-clause to refer to an unreal past situation with past result."
      },
      {
        id: 3,
        question: "The director insisted that all quarterly reports ________ submitted by 5 PM.",
        options: ["are", "be", "were", "will be"],
        correctIndex: 1,
        explanation: "The subjunctive mood following verbs of demand/insistence takes the base form ('be')."
      },
      {
        id: 4,
        question: "Scarcely had the keynote speaker begun ________ the projector malfunctioned.",
        options: ["when", "than", "then", "after"],
        correctIndex: 0,
        explanation: "'Scarcely... when' and 'Hardly... when' are standard correlative conjunctions (unlike 'No sooner... than')."
      },
      {
        id: 5,
        question: "Which of the following sentences exhibits impeccable parallel structure?",
        options: [
          "She enjoys reading biographies, to write poetry, and analyzing speeches.",
          "She enjoys reading biographies, writing poetry, and analyzing speeches.",
          "She enjoys to read biographies, writing poetry, and analyzes speeches.",
          "She enjoys reading biographies, writing poetry, and to analyze speeches."
        ],
        correctIndex: 1,
        explanation: "All three gerunds ('reading', 'writing', 'analyzing') maintain parallel grammatical form."
      },
      {
        id: 6,
        question: "The committee has reached an impasse; ________, we must adjourn until Monday.",
        options: ["therefore", "nevertheless", "furthermore", "whereas"],
        correctIndex: 0,
        explanation: "'Therefore' correctly conveys the logical consequence of reaching an impasse."
      },
      {
        id: 7,
        question: "Had she known about the revised visa criteria, she ________ her application sooner.",
        options: ["would submit", "would have submitted", "will have submitted", "had submitted"],
        correctIndex: 1,
        explanation: "Inverted third conditional ('Had she known...') pairs with 'would have submitted'."
      },
      {
        id: 8,
        question: "He is one of those managers who ________ consistently respected by peers.",
        options: ["is", "are", "has been", "was"],
        correctIndex: 1,
        explanation: "'Who' refers to the plural antecedent 'managers', requiring the plural verb 'are'."
      },
      {
        id: 9,
        question: "The new compliance guidelines apply to everyone, including you and ________.",
        options: ["I", "me", "myself", "mine"],
        correctIndex: 1,
        explanation: "'Including' functions as a preposition requiring an objective case pronoun ('me')."
      },
      {
        id: 10,
        question: "Notwithstanding the torrential rain, the seminar ________ smoothly.",
        options: ["proceeded", "preceded", "perceived", "presided"],
        correctIndex: 0,
        explanation: "'Proceeded' means continued forward in progress."
      }
    ]
  },
  kidsGrammar: {
    id: "kidsGrammar",
    title: "Young Learners Grammar Quest",
    badge: "Ages 6 - 15 Years",
    description: "An engaging, friendly English foundations test evaluating articles, prepositions, tenses, and sentence building.",
    timeLimit: "10 mins",
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: "The little kitten is sleeping ________ the cozy basket.",
        options: ["in", "on", "at", "to"],
        correctIndex: 0,
        explanation: "We use 'in' to indicate something inside an enclosed space like a basket."
      },
      {
        id: 2,
        question: "She brought ________ apple and two bananas for lunch today.",
        options: ["a", "an", "the", "some"],
        correctIndex: 1,
        explanation: "'Apple' starts with a vowel sound, so we use the article 'an'."
      },
      {
        id: 3,
        question: "Yesterday, Aarav ________ his favorite storybook in the library.",
        options: ["read", "reads", "is reading", "will read"],
        correctIndex: 0,
        explanation: "'Yesterday' shows past time, so we use the past tense 'read' (pronounced red)."
      },
      {
        id: 4,
        question: "The children ________ playing happily in the academy garden right now.",
        options: ["is", "are", "was", "be"],
        correctIndex: 1,
        explanation: "'Children' is plural, so we use 'are' for present continuous action."
      },
      {
        id: 5,
        question: "Rohan and ________ are preparing a speech for the elocution contest.",
        options: ["me", "I", "him", "us"],
        correctIndex: 1,
        explanation: "As part of the subject, we use the subject pronoun 'I' ('Rohan and I')."
      },
      {
        id: 6,
        question: "Which word is an ADJECTIVE in this sentence: 'The courageous girl won the medal.'?",
        options: ["girl", "courageous", "medal", "won"],
        correctIndex: 1,
        explanation: "'Courageous' describes the noun 'girl', so it is an adjective."
      },
      {
        id: 7,
        question: "Birds build their nests high up ________ the tall banyan tree.",
        options: ["under", "between", "in", "behind"],
        correctIndex: 2,
        explanation: "Birds build nests 'in' trees among the branches."
      },
      {
        id: 8,
        question: "I wanted to go to the park, ________ it started raining heavily.",
        options: ["so", "but", "because", "or"],
        correctIndex: 1,
        explanation: "'But' shows a contrast or obstacle between wanting to go and the rain."
      },
      {
        id: 9,
        question: "This is the ________ book I have ever read in the Reading Club!",
        options: ["good", "better", "best", "more good"],
        correctIndex: 2,
        explanation: "Superlative degree of 'good' is 'best' ('the best')."
      },
      {
        id: 10,
        question: "Tomorrow morning, our class ________ a new poem by heart.",
        options: ["recited", "will recite", "recites", "has recited"],
        correctIndex: 1,
        explanation: "'Tomorrow morning' signifies future action, requiring 'will recite'."
      }
    ]
  }
};
