import React from 'react'
import './Signin.css'

const Signin = () => {
  return (
    <div className="login-container">
      {/* Background visual element - subtle glass effect */}
      <div className="glass-blob"></div>

      <div className="login-card">
        <header className="login-header">
          <div className="edu-logo">THE GLASS OFFICE</div>
          <span className="edu-label">INTERN PORTAL ACCESS</span>
        </header>

        <form className="login-form">
          <div className="input-group">
            <label>INSTITUTIONAL EMAIL</label>
            <input 
              type="email" 
              placeholder="name@university.edu" 
              required 
            />
          </div>

          <div className="input-group">
            <label>ACCESS KEY</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <div className="login-utilities">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              REMEMBER SESSION
            </label>
            <a href="#forgot" className="forgot-link">FORGOT KEY?</a>
          </div>

          <button type="submit" className="btn-minimal primary-dark login-submit">
            ENTER OFFICE
          </button>
        </form>

        <footer className="login-footer">
          <p>New to the program? <a href="/#pricing">View Enrollment Plans</a></p>
        </footer>
      </div>
    </div>
  )
}

export default Signin
