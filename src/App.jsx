import NeuralNetwork from './components/NeuralNetwork'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  const progress = useScrollProgress()

  return (
    <div className="relative">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="noise" />
      <NeuralNetwork />

      <div className="relative z-10">
        <Nav />
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App