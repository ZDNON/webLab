// src/main.tsx or src/App.tsx
import './styles/tokens.css'; 
import './App.css'; 

function App() {
  return (
    /* Main container to apply the responsive design system [cite: 19] */
    <div className="portfolio-container">

      {/* Accessibility: Skip link for keyboard users  */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
    
      <main id="main-content">
        <section id="profile-section">
          {/* Main card that will be responsive across 3 breakpoints [cite: 20, 23] */}
          <article className="single-card">
            
            {/* Header using Flexbox for alignment [cite: 26] */}
            <header className="card-header">
              {/* Avatar circle styled using Design Tokens [cite: 25] */}
              <div className="avatar-circle" aria-hidden="true">Z</div>
              <h1>Zid Alkhani</h1>
              <p className="student-id">Student ID: 225541609 </p>
            </header>

            <div className="card-body">
              {/* Bio section with Fluid Typography (clamp) [cite: 24] */}
              <section className="bio-section">
                <h2>About Me </h2>
                <p>I am a third year software engineering student.</p>
              </section>

              <hr />

              {/* Contact section implementing responsive form layouts [cite: 1088] */}
              <section id="contact">
                <h2>Contact Me </h2>
                <form action="#" method="POST" noValidate> 
                  <fieldset> 
                    <legend>Send a Message </legend>
                    
                    {/* Form groups spaced using Design Tokens [cite: 25, 287] */}
                    <div className="form-group">
                      <label htmlFor="full-name">Full Name: </label>
                      <input
                        type="text" id="full-name" name="name"
                        required minLength={2} aria-describedby="full-name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="user-email">Email Address:</label>
                      <input
                        type="email" id="user-email" name="email"
                        required aria-describedby="user-email"
                      />
                    </div>

                    {/* Submit button that adjusts width based on screen size [cite: 1113] */}
                    <button type="submit" className="submit-btn">Submit </button>
                  </fieldset>
                </form>
              </section>
            </div>
          </article>
        </section>
      </main>

      {/* Footer styled to be consistent across all devices [cite: 1065] */}
      <footer className="main-footer">
        <p>&copy; 2026 Zid Alkhani | 225541609 </p>
      </footer>
    </div>
  )
}

export default App