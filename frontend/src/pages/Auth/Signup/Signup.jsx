import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div>
<div className="enroll-container">
      <div className="enroll-card">
        <header className="enroll-header">
          <div className="edu-logo">THE GLASS OFFICE </div>
          <span className="edu-label">ENROLLMENT FORM 2026</span>
          <h2 className="enroll-title">Join the Observation.</h2>
        </header>

        <form className="enroll-form">
          <div className="input-row">
            <div className="input-group">
              <label>LEGAL FULL NAME</label>
              <input type="text" placeholder="Jane Doe" required />
            </div>
          </div>

          <div className="input-group">
            <label>INSTITUTIONAL EMAIL</label>
            <input type="email" placeholder="name@university.edu" required />
          </div>

          <div className="input-group">
            <label>INTENDED TRACK</label>
            <select required>
              <option value="" disabled selected>Select your discipline</option>
              <option value="tech">Technical Execution</option>
              <option value="strat">Strategic Analysis</option>
              <option value="ops">Operational Logic</option>
            </select>
          </div>

          <div className="input-group">
            <label>CREATE ACCESS KEY</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <div className="enroll-policy">
            <p>
              By enrolling, you acknowledge that all founder sessions are proprietary 
              and agree to the <strong>Non-Disclosure Agreement</strong> (NDA) 
              governing "The Glass Office" digital workspace.
            </p>
          </div>

          <button type="submit" className="btn-minimal primary-dark enroll-btn">
            COMPLETE ENROLLMENT
          </button>
        </form>

        <footer className="enroll-footer">
          <p>Already have access? <a href="/login">Log in to Portal</a></p>
        </footer>
      </div>
    </div>
    </div>
  )
}

export default Signup
