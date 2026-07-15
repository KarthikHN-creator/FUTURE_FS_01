export default function Projects() {
  return (
    <section style={styles.projectsSection}>
      <h2 style={styles.sectionTitle}>Featured <span style={styles.accent}>Projects</span></h2>
      
      <div style={styles.grid}>
        {/* Project 1: Web Dev */}
        <div style={styles.projectCard}>
          <div style={styles.imagePlaceholder}>Web App UI</div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Full Stack Portfolio</h3>
            <p style={styles.cardText}>
              A responsive, dark-themed professional portfolio built with React and Node.js. 
              Features modular components and a modern aesthetic.
            </p>
            <a href="#" style={styles.link}>View on GitHub ➔</a>
          </div>
        </div>

        {/* Project 2: Python / DSA */}
        <div style={styles.projectCard}>
          <div style={styles.imagePlaceholder}>Python Terminal</div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Algorithmic Logic Scripts</h3>
            <p style={styles.cardText}>
              A collection of Python scripts utilizing functions to solve complex logic tasks, 
              including prime number calculations and generating hollow geometric patterns.
            </p>
            <a href="#" style={styles.link}>View on GitHub ➔</a>
          </div>
        </div>

        {/* Project 3: Digital Media */}
        <div style={styles.projectCard}>
          <div style={styles.imagePlaceholder}>Video / Image Edit</div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Stream Media Assets</h3>
            <p style={styles.cardText}>
              High-energy video cuts and bold image edits designed to maximize viewer 
              engagement for upcoming YouTube streams.
            </p>
            <a href="#" style={styles.link}>Watch Preview ➔</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  projectsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#0a0a0a', 
  },
  sectionTitle: {
    fontSize: '3rem',
    marginBottom: '3rem',
    textAlign: 'center',
  },
  accent: {
    color: 'var(--crimson-red)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.5rem',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  projectCard: {
    backgroundColor: '#181818', 
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #3a3a3a', 
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.8)', 
  },
  imagePlaceholder: {
    height: '200px',
    backgroundColor: '#252525', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderBottom: '3px solid var(--crimson-red)', 
  },
  cardContent: {
    padding: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.4rem',
    marginBottom: '0.8rem',
    color: '#fff',
  },
  cardText: {
    color: 'var(--text-muted)',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  link: {
    color: 'var(--crimson-red)',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  }
}