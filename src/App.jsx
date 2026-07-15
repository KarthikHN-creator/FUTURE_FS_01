import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects' // Import the Projects component

function App() {
  return (
    <div className="portfolio-container">
      <Hero />
      <Skills />
      <Projects /> {/* Render it below Skills */}
    </div>
  )
}

export default App