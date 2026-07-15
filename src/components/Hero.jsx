export default function Hero() {
  return (
    <section style={styles.heroSection}>
      <h1 style={styles.heading}>
        Hi, I'm Karthik <span style={styles.accent}>.</span>
      </h1>
      <h2 style={styles.subheading}>
        Full Stack Web Developer & Digital Content Creator
      </h2>
      <p style={styles.description}>
        I build dynamic web applications and craft engaging digital experiences. 
        Currently building full-stack solutions at Future Interns.
      </p>
      <button style={styles.button}>View My Projects</button>
    </section>
  )
}

// Using a style object here for a quick, modular layout!
const styles = {
  heroSection: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '4rem 2rem',
  },
  heading: {
    fontSize: '4rem',
    marginBottom: '0.5rem',
  },
  accent: {
    color: 'var(--crimson-red)',
  },
  subheading: {
    fontSize: '2rem',
    color: 'var(--text-muted)',
    marginBottom: '1.5rem',
  },
  description: {
    maxWidth: '600px',
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'var(--crimson-red)',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
}