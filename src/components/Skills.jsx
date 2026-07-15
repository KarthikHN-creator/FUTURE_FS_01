export default function Skills() {
  return (
    <section style={styles.skillsSection}>
      <h2 style={styles.sectionTitle}>Technical <span style={styles.accent}>&</span> Creative Skills</h2>
      
      <div style={styles.grid}>
        {/* Web Development Card */}
        <div style={styles.skillCard}>
          <h3 style={styles.cardTitle}>Full Stack Web Dev</h3>
          <p style={styles.cardText}>React, Node.js, JavaScript, HTML & CSS.</p>
        </div>
        
        {/* Programming & Logic Card */}
        <div style={styles.skillCard}>
          <h3 style={styles.cardTitle}>Programming & Logic</h3>
          <p style={styles.cardText}>Python, algorithm logic, and building mathematical functions.</p>
        </div>
        
        {/* Digital Media Card */}
        <div style={styles.skillCard}>
          <h3 style={styles.cardTitle}>Content Creation</h3>
          <p style={styles.cardText}>Video editing, image editing, and YouTube content strategy.</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  skillsSection: {
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: '3rem',
    marginBottom: '3rem',
  },
  accent: {
    color: 'var(--crimson-red)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    width: '100%',
  },
  skillCard: {
    backgroundColor: 'var(--bg-panel)',
    padding: '2rem',
    borderRadius: '8px',
    borderBottom: '4px solid var(--crimson-red)',
    transition: 'transform 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#fff',
  },
  cardText: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  }
}