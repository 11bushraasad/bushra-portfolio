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
  const [selectedAnswer, setSelectedAnswer] = useState('')

  function handleQuestion(question) {
    setSelectedQuestion(question)
    setSelectedAnswer(
      answers[question] ||
      "Please choose one of the questions above."
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

        {/* WINDOW HEADER */}
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
              className={`pixel-tag font-pixel text-[8px] px-3 py-2 transition-all ${
                selectedQuestion === question
                  ? 'text-pink border-pink'
                  : 'text-lavender hover:text-pink hover:border-pink'
              }`}
            >
              {question}
            </button>
          ))}
        </div>

        {/* CHAT AREA */}
        <div className="min-h-[430px] p-6 md:p-8 flex flex-col">

          {!selectedQuestion && (
            <div className="flex-1 flex items-center justify-center">
              <p className="font-pixel text-[8px] text-paper-muted/50">
                ✦ SELECT A QUESTION TO START ✦
              </p>
            </div>
          )}

          {selectedQuestion && (
            <div className="flex flex-col gap-5">

              {/* QUESTION — RIGHT */}
              <div className="flex justify-end">
                <div className="max-w-[70%]">
                  <div
                    className="
                      bg-pink
                      text-ink
                      border-2
                      border-ink
                      px-4
                      py-3
                      font-pixel
                      text-[8px]
                      leading-relaxed
                      shadow-[4px_4px_0px_#120C1E]
                    "
                  >
                    {selectedQuestion}
                  </div>
                </div>
              </div>

              {/* ANSWER — LEFT */}
              <div className="flex justify-start">
                <div className="max-w-[75%]">
                  <div
                    className="
                      bg-ink
                      text-lavender
                      border-2
                      border-ink-line
                      px-4
                      py-4
                      font-pixel
                      text-[8px]
                      leading-[1.8]
                    "
                  >
                    {selectedAnswer}
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </Section>
  )
}
