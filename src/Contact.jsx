function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Let’s connect</h2>
      </div>

      <div className="contact-card">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:mokandy151@gmail.com">mokandy151@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> 647-571-5443
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/Mokingjay151" target="_blank" rel="noreferrer">
            github.com/Mokingjay151
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/andy-mok-8089822a9/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/andy-mok-8089822a9/
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact