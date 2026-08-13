import profile from './data/profile.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import AIToolkit from './components/AIToolkit.jsx'
import Experience from './components/Experience.jsx'
import AIAgent from './components/AIAgent.jsx'
import AIFluency from './components/AIFluency.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper font-body">
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills profile={profile} />
        <Projects profile={profile} />
        <AIToolkit profile={profile} />
        <Experience profile={profile} />
        <AIAgent profile={profile} />
        <AIFluency profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </div>
  )
}
