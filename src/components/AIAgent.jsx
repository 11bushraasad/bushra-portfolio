import { useState } from 'react'
import Section from './ui/Section.jsx'
import PixelIcon from './ui/PixelIcon.jsx'

export default function AIAgent({ profile }) {
  const answers = {
    "Who is Bushra?":
      "Bushra Asad is a Software Engineering student and UI/UX Designer from Pakistan. She is passionate about software development, user experience, design, technology, and AI.",

    "What are her skills?":
      "Bushra's skills include Software Engineering, UI/UX Design, Figma, C++, OOP, Data Structures, Databases, HTML, CSS, JavaScript, React, Blender, Calculus, Algebra, and Probability.",

    "Does she know UI/UX?":
      "Yes. Bushra has experience in UI/UX design, including user research, personas, information architecture, user flows, wireframes, high-fidelity designs, and prototypes.",

    "What projects has she worked on?":
      "Bushra has worked on projects including a University Portal UX project, StoryVerse, her personal portfolio, and AI-focused projects.",

    "Where has she interned?":
      "Bushra has completed UI/UX internship experience at Decode Labs and FlyRank AI.",

    "What AI tools does she use?":
      "Bushra uses AI tools such as Claude, Gemini, and other AI-powered tools to support research, design, content creation, prototyping, and her development workflow."
  }

  const [selectedQuestion, setSelectedQuestion] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState(
    '[ click a question above to learn about Bushra ]'
  )

  function handleQuestion(question) {
    setSelectedQuestion(question)
    setSelectedAnswer(
      answers[question] || 'Please choose one of the questions above.'
    )
  }

  return (
    <Section
      id="agent"
      index="06"
      label="Interactive"
      title="MEET MY AI AGENT"
    >
      <p className="text-paper-muted leading-relaxed max-w-2xl mb-8">
        Click a question below to learn more about Bushra, her skills,
        projects, experience, and AI workflow.
      </p>

      <div className="pixel-border bg-ink-soft overflow-hidden">

        {/* AGENT WINDOW HEADER */}
        <div className="flex items-center justify-between bg-magenta px-4 py-2 border-b-[3px] border-paper">
          <span className="font-pixel text-[9px] text-ink flex items-center gap-2">
            <PixelIcon
              type="sparkle"
              size={10}
              color="#120C1E"
            />
            AGENT.EXE
          </span>

          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-ink" />
            <span className="w-2.5 h-2.5 bg-ink" />
            <span className="w-2.5 h-2.5 bg-pink" />
          </div>
        </div>

        {/* QUESTIONS */}
        <div className="flex flex-wrap gap-2 p-4 border-b-2 border-ink-line">
          {profile.suggestedQuestions.map((question) => (
            <button
              key={question}
              onClick={() => handleQuestion(question)}
              className={`pixel-tag text-xs px-3 py-1.5 transition-colors ${
                selectedQuestion === question
                  ? 'text-pink border-pink'
                  : 'text-lavender hover:text-pink hover:border-pink'
              }`}
            >
              {question}
            </button>
          ))}
        </div>

        {/* RESPONSE AREA */}
        <div className="relative min-h-[420px] p-6">

          {/* ANSWER — LEFT */}
          <div className="max-w-[58%]">

            <div
              className="bg-ink border-2 border-ink-line text-paper-muted px-5 py-4 text-sm leading-relaxed"
            >
              {selectedAnswer}
            </div>

          </div>

          {/* QUESTION — RIGHT */}
          {selectedQuestion && (
            <div className="absolute right-6 top-24 max-w-[42%]">
              <div
                className="bg-pink text-ink border-2 border-ink px-5 py-4 text-sm leading-relaxed"
              >
                {selectedQuestion}
              </div>
            </div>
          )}

        </div>

      </div>
    </Section>
  )
}
