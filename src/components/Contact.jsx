export default function Contact() {
  return (
    <section style={styles.contactSection}>
      <h2 style={styles.sectionTitle}>Get In <span style={styles.accent}>Touch</span></h2>
      <p style={styles.subtitle}>Have a question or want to work together? Send me a message!</p>
      
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input type="text" placeholder="Your Name" style={styles.input} required />
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="Your Email" style={styles.input} required />
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Message</label>
          <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
        </div>
        
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </section>
  )
}

const styles = {
  contactSection: {
    padding: '5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0a0a0a', /* Matches the Projects background */
  },
  sectionTitle: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  accent: {
    color: 'var(--crimson-red)',
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '1.2rem',
    marginBottom: '3rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#181818', /* Matches your new UI */
    padding: '2.5rem',
    borderRadius: '12px',
    borderTop: '4px solid var(--crimson-red)',
    border: '1px solid #3a3a3a', 
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.8)',
  },
  inputGroup: {
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #3a3a3a',
    backgroundColor: '#121212',
    color: '#fff',
    fontSize: '1rem',
  },
  textarea: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #3a3a3a',
    backgroundColor: '#121212',
    color: '#fff',
    fontSize: '1rem',
    minHeight: '150px',
    resize: 'vertical',
  },
  button: {
    padding: '14px 24px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'var(--crimson-red)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'opacity 0.3s ease',
  }
}