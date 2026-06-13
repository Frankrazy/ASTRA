import "./App.css";

function App() {
  return (
   <main className="app">
    <header className="app-header">
      <div>
        <h1>ASTRA</h1>
        <p>AI-powered Earth Observation platform</p>
      </div>
    </header>

    <section className="hero">
      <div className="hero-content">
        <h2>Monitor Earth. Predict Risk. Generate Insight.</h2>
        <p>
          ASTRA helps users analyze vegetation health, drought risk, and enviromental changes using satellte and climate  data. 
        </p>

        <div className="status-panel">
          <span className="status-dot"></span>
          <span>Frontend ready. Backend connection coming next.</span>
        </div>
      </div>
    </section>
  </main>
  );
}

export default App;