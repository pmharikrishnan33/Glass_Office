import React from 'react'
import './UserDashboard.css'

const UserDashboard = () => {


        // Dummy data representing the 3-hour working sessions
  const sessions = [
    { id: 1, title: "Scaling Backend Architecture", founder: "Founding Engineer A", tag: "TECHNICAL", duration: "3h 05m", status: "New" },
    { id: 2, title: "Q3 Strategy & Market Pivot", founder: "CEO / Founder", tag: "STRATEGIC", duration: "2h 58m", status: "Completed" },
    { id: 3, title: "Operations & Team Sync", founder: "COO", tag: "OPERATIONAL", duration: "3h 12m", status: "In Progress" },
    { id: 4, title: "Frontend Performance Audit", founder: "Founding Engineer B", tag: "TECHNICAL", duration: "3h 00m", status: "New" },
    { id: 5, title: "Venture Capital Pitch Prep", founder: "CEO / Founder", tag: "STRATEGIC", duration: "2h 45m", status: "New" },
    { id: 6, title: "Product Roadmap Alignment", founder: "CPO", tag: "OPERATIONAL", duration: "3h 05m", status: "New" },
  ];




  return (
          <div>
      <div className="dash-container">
      {/* Sidebar Navigation */}
      <aside className="dash-sidebar">
        <div className="edu-logo sidebar-logo">THE GLASS OFFICE</div>
        <nav className="sidebar-nav">
          <div className="nav-group">
            <label>OBSERVATION ROOMS</label>
            <button className="nav-item active">ALL SESSIONS</button>
            <button className="nav-item">TECHNICAL</button>
            <button className="nav-item">STRATEGIC</button>
            <button className="nav-item">OPERATIONAL</button>
          </div>
          <div className="nav-group">
            <label>MY ACCOUNT</label>
            <button className="nav-item">TRANSCRIPTS</button>
            <button className="nav-item">CERTIFICATES</button>
            <button className="nav-item">SETTINGS</button>
          </div>
        </nav>
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">JD</div>
            <div className="user-info">
              <span className="user-name">JANE DOE</span>
              <span className="user-status">INTERN 2026</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dash-main">
        <header className="dash-header">
          <div className="header-title">
            <span className="edu-label">SESSION REPLAY ARCHIVE</span>
            <h1>Available Observations</h1>
          </div>
          <div className="header-actions">
            <input type="text" placeholder="Search sessions..." className="dash-search" />
          </div>
        </header>

        <section className="session-grid">
          {sessions.map(session => (
            <div className="session-card" key={session.id}>
              <div className="card-video-placeholder">
                <span className="duration-tag">{session.duration}</span>
                <div className="play-overlay">WATCH SESSION</div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-tag">{session.tag}</span>
                  <span className={`status-dot ${session.status.toLowerCase().replace(" ", "-")}`}>
                    {session.status}
                  </span>
                </div>
                <h3 className="card-title">{session.title}</h3>
                <p className="card-founder">Observation of {session.founder}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
    </div>
  )
}

export default UserDashboard
