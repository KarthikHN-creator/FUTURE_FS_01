import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills' // Import the new component

function App() {
  return (
    <div className="portfolio-container">
      <Hero />
      <Skills /> {/* Render it below the Hero */}
    </div>
  )
}

export default App