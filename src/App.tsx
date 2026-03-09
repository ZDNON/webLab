import './App.css'



function App() {

  return (

    <div className="portfolio-container">

      <a href="#main-content" className="skip-link">Skip to main content</a>



      <main id="main-content">
        <section id="profile-section">
          <article className="single-card">
            <header className="card-header">
              <div className="avatar-circle" aria-hidden="true">Z</div>
              <h1>Zid Alkhani</h1>
              <p className="student-id">Student ID: 225541609 [cite: 6]</p>
            </header>
            <div className="card-body">
              <section className="bio-section">
                <h2>About Me </h2>
                <p>I am a third year software engineering student.</p>
              </section>
              <hr />
              <section id="contact">
                <h2>Contact Me </h2>
                <form action="#" method="POST" noValidate> 
                  <fieldset> 
                    <legend>Send a Message </legend>
                    <div className="form-group">
                      <label htmlFor="full-name">Full Name: </label>
                      <input
                        type="text" id="full-name" name="name"
                        required minLength={2} aria-describedby="name-error"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="user-email">Email Address:</label>
                      <input
                        type="email" id="user-email" name="email"
                        required aria-describedby="email-error"
                      />
                    </div>
                    <button type="submit" className="submit-btn">Submit </button>
                  </fieldset>
                </form>
              </section>
            </div>
          </article>
        </section>
      </main>
      <footer className="main-footer">
        <p>&copy; 2026 Zid Alkhani | 225541609 </p>
      </footer>
    </div>
  )
}
export default App