import { useState } from 'react'
import Section from './ui/Section.jsx'
import PixelIcon from './ui/PixelIcon.jsx'

export default function AIAgent({ profile }) {
  const [selectedQuestion, setSelectedQuestion] = useState(null)

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

        {/* AGENT HEADER */}
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


        {/* QUESTION BUTTONS */}
        <div className="flex flex-wrap gap-2 p-4 border-b-2 border-ink-line">

          {profile.suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQuestion(q)}
              className={`pixel-tag text-xs px-3 py-1.5 transition-colors ${
                selectedQuestion === q
                  ? 'text-pink border-pink'
                  : 'text-lavender hover:text-pink hover:border-pink'
              }`}
            >
              {q}
            </button>
          ))}

        </div>


        {/* CHAT DISPLAY */}
        <div className="min-h-[300px] px-5 py-6">

          {!selectedQuestion ? (

            <div className="border-2 border-ink-line bg-ink px-4 py-3">
              <p className="text-paper-muted text-sm leading-relaxed">
                [ click a question above to learn about Bushra ]
              </p>
            </div>

          ) : (

            <div className="flex flex-col gap-5">

              {/* ANSWER — LEFT */}
              <div className="flex justify-start">

                <div className="max-w-[70%] bg-ink border-2 border-ink-line px-4 py-3">

                  <p className="text-paper-muted text-sm leading-relaxed">
                    {answers[selectedQuestion]}
                  </p>

                </div>

              </div>


              {/* QUESTION — RIGHT */}
              <div className="flex justify-end">

                <div className="max-w-[55%] bg-pink border-2 border-ink px-4 py-3">

                  <p className="font-pixel text-[10px] text-ink leading-relaxed">
                    {selectedQuestion}
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </Section>
  )
}
