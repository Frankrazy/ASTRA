import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "./App.css";
import { Circle } from "leaflet";

const KENYA_CENTER = [-0.0236, 37.9062];

const previewLocations = [
  {
    id: 1,
    name: "Nairobi",
    country: "Kenya",
    latitude: -1.286389,
    longitude: 36.817223,
    description: "Kenya's capital city and a major urban monitoring region."
  },

 {
   id: 2,
   name: "Turkana",
   country: "Kenya",
   latitude: 3.312247,
   longitude: 35.565786,
   description: "A semi-arid region important for drought and vegetation monitoring"
 }
];

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
       <div cassName="map-card">
        <MapContainer
          center={KENYA_CENTER}
          zoom={6}
          scrollWheelZoom={true}
          className="leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {previewLocations.map((location) => (
            <CircleMarker
              key={location.id}
              center={[location.latitude, location.longitude]}
              radius={10}
              pathOptions={{
                color: "#236b49",
                fillColor: "#2fb36d",
                fillOpacity: 0.85
              }}
            >
              <Popup>
                <strong>{location.name}</strong>
                <br />
                {location.country}
                <br />
                {location.description}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
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