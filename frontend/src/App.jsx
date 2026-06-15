import "./App.css";

function App() {
  return (
   <main className="app-shell">
    <header className="topbar">
      <div>
        <h1>ASTRA</h1>
        <p>Earth Observation Intelligence</p>
      </div>

      <div className="system-status">
        <span className="status-dot"></span>
        <span>System Online</span>
      </div>
    </header>

    <section className="workspace">
      <aside className="sidebar">
        <section className="panel">
          <h2>Location Search</h2>
          <p className="panel-text">
            Search for a region to begin environmental monitoring.
          </p>

          <div className="search-box">
            <input type="text" placeholder="Search Nairobi or Turkana" />
            <button type="button">Search</button>
          </div>
        </section>

        <section className="panel">
          <h2>Selected Region</h2>

          <div className="region-card">
            <span className="empty-state">No region selected yet</span>
          </div>
        </section>

        <section className="panel">
          <h2>Analysis Modules</h2>

          <div className="module-list">
            <div className="module-item active">
              <span>Vegetation Health</span>
              <strong>Ready</strong>
            </div>

            <div className="module-item">
              <span>Drought Risk</span>
              <strong>Week 4</strong>
            </div>

            <div className="module-item">
              <span>Flood Monitoring</span>
              <strong>Week 6</strong>
            </div>
          </div>
        </section>
      </aside>

      <section className="map-area">
        <div className="map-placeholder">
          <div>
            <h2>Interactive Map</h2>
            <p>Leaflet map will be added here on day 4.</p>
          </div>
        </div>

        <section classsName="Insight-bar">
          <div>
            <span className="metric-label">Vegetation Health</span>
            <strong>Pending</strong>
          </div>

          <div>
            <span className="metric-label">Drought Risk</span>
            <strong>Pending</strong>
          </div>

          <div>
            <span className="metric-label">Satellite Layer</span>
            <strong>Not Connected</strong>
          </div>
        </section>
      </section>
    </section>
  </main>
 );
}

export default App;