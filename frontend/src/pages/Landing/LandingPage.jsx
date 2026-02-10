import React from 'react';
import './LandingPage.css';

const LandingPage= () => {
  return (
    <div className="edu-container">
        {/* Expanded Navbar */}
        <nav className="nav">
            <div className="nav-left">THE GLASS OFFICE</div>
            
            <div className="nav-center">
            <a href="#about">ABOUT</a>
            <a href="#curriculum">CURRICULUM</a>
            <a href="#mentors">MENTORS</a>
            <a href="#pricing">PRICING</a>
            </div>

            <div className="nav-right">
            <button className="btn-text">LOGIN</button>
            <button className="btn-minimal nav-enroll">ENROLL NOW</button>
            </div>
        </nav>

        {/* Hero Section */}
        <header className="hero">
            <span className="hero-label">VIRTUAL SHADOWING PROGRAM 2026</span>
            <h1 className="hero-title">Professional Observation for the Next Generation.</h1>
            <p className="hero-text">
            A structured approach to understanding industry workflows. Gain insight 
            into executive decision-making through direct digital observation.
            </p>
            <div className="hero-actions">
            <button className="btn-minimal primary-dark">VIEW PROGRAMS</button>
            <button className="btn-minimal secondary-outline">READ WHITE PAPER</button>
            </div>
        </header>

        {/*<section className="edu-section" id="about">
            <div className="edu-hero">
                <h2 className="edu-title">The End of Theoretical Learning.</h2>
                <p className="edu-text">
                Traditional internships often relegate talent to menial tasks, hiding the real 
                mechanics of business behind closed doors. <strong>The Glass Office</strong> 
                reverses this. We provide raw, unedited access to the decision-making process, 
                allowing you to observe how founders navigate high-stakes environments in real-time.
                </p>
            </div>
        </section> */}

        {/* Centered Content Section */}

        <section className="edu-section" id="curriculum">
            <span className="edu-label">CORE SYLLABUS</span>
            <div className="edu-grid">
                <div className="edu-item">
                <h4>PHASE 01: ARCHITECTURE</h4>
                <p>3 Hours of deep-dive into system design, technical debt management, and scaling logic.</p>
                </div>
                <div className="edu-item">
                <h4>PHASE 02: OPERATIONS</h4>
                <p>Observe live resource allocation, team synchronization, and crisis management protocols.</p>
                </div>
                <div className="edu-item">
                <h4>PHASE 03: GROWTH</h4>
                <p>A transparent look at user acquisition data, conversion optimization, and market pivots.</p>
                </div>
            </div>
        </section>

        <section className='pricing'>
            <span pricing-label>TUITION & ACCESS</span>
            <div className="pricing-grid">
                <div className="pricing-card">
                    <h4>SINGLE SESSION</h4>
                    <p>Access to one 3-hour micro-internship video + transcript.</p>
                    <h3>$49</h3>
                    <button className="btn-minimal">SELECT</button>
                </div>
                <div className="pricing-card">
                    <h4>FULL SEMESTER</h4>
                    <p>Unlimited access to the entire 2026 video archive & live Q&As.</p>
                    <h3>$199</h3>
                    <button className="btn-minimal primary-dark">ENROLL NOW</button>
                </div>
                <div className="pricing-card">
                    <h4>INSTITUTIONAL</h4>
                    <p>For universities looking to bridge the gap for their students.</p>
                    <h3>CUSTOM</h3>
                    <button className="btn-minimal">CONTACT</button>
                </div>
            </div>
        </section>
       {/* <section className="edu-section" id="pricing">
            <span className="edu-label">TUITION & ACCESS</span>
            <div className="edu-grid">
                <div className="edu-item" style={{border: '1px solid #e5e5e5', padding: '2rem'}}>
                    <h4>SINGLE SESSION</h4>
                    <p>Access to one 3-hour micro-internship video + transcript.</p>
                    <h3 style={{fontSize: '1.5rem', margin: '1rem 0'}}>$49</h3>
                    <button className="btn-minimal">SELECT</button>
                </div>
                <div className="edu-item" style={{border: '1px solid #1a1a1a', padding: '2rem', transform: 'scale(1.05)', background: '#fff'}}>
                    <h4>FULL SEMESTER</h4>
                    <p>Unlimited access to the entire 2026 video archive & live Q&As.</p>
                    <h3 style={{fontSize: '1.5rem', margin: '1rem 0'}}>$199</h3>
                    <button className="btn-minimal primary-dark">ENROLL NOW</button>
                </div>
                <div className="edu-item" style={{border: '1px solid #e5e5e5', padding: '2rem'}}>
                    <h4>INSTITUTIONAL</h4>
                    <p>For universities looking to bridge the gap for their students.</p>
                    <h3 style={{fontSize: '1.5rem', margin: '1rem 0'}}>CUSTOM</h3>
                    <button className="btn-minimal">CONTACT</button>
                </div>
            </div>
        </section> */}

         <footer className="footer">
            <p>© 2026 THE GLASS OFFICE — ACADEMIC DIVISION</p>
        </footer>
    </div>
  );
};

export default LandingPage;