import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import "./App.css";

const KENYA_CENTER = [-0.0236, 37.9062];
const API_BASE_URL = "http://127.0.0.1:8000/";

const MAP_LAYERS = {
  street: {
    id: "street",
    name: "Street Map",
    type: "Reference",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  },
  satellite: {
    id: "satellite",
    name: "Satellite Imagery",
    type: "Earth Observetion",
    attribution:
      "Title &copy; Esri, Maxar, Earthstar Geographics, and the GIS User Community",
    url:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  }
};

function MapController({ selectedLocation }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedLocation) {
      return;
    }

    map.flyTo(
      [selectedLocation.latitude, selectedLocation.longitude],
      9,
      {
        duration: 1.2
      }
    );
  }, [map, selectedLocation]);

  return null;
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchMessage, setSearchMessage] = useState("");

  const[locations, setLocations] = useState([]);
  const [isLoadingLocations, setIsLoadingLocations] = useState(true);
  const [apiError, setApiError] = useState("");

  const [activeLayerId, setActiveLayerId] = useState("street");
  const activeLayer = MAP_LAYERS[activeLayerId];

useEffect(() => {
  async function fetchLocations() {
    try {
      const response = await fetch(`${API_BASE_URL}locations`);

      if (!response.ok) {
        throw new Error("Failed to load locations.");
      }

      const data = await response.json();

      setLocations(data.locations);
      setApiError("");
    } catch (error) {
      console.error(error);
      setApiError("Backend connection failed. Make sure FastAPI is running.");
      setLocations([]);
    } finally {
      setIsLoadingLocations(false);
    }
  }

  fetchLocations();
}, []);

function handleSearch(event) {
  event.preventDefault();

  const cleanedSearch = searchTerm.trim().toLowerCase();

  if (!cleanedSearch) {
    setSelectedLocation(null);
    setSearchMessage("Type a location name to begin.");
    return;
  }

  const match = locations.find(
    (location) => location.name.toLowerCase() === cleanedSearch
  );

  if (!match) {
    setSelectedLocation(null);
    setSearchMessage("Location not found. Try one of the available backend locations.");
    return;
  }

  setSelectedLocation(match);
  setSearchMessage("");
}

  return (
   <main className="app-shell">
    <header className="topbar">
      <div>
        <h1>ASTRA</h1>
        <p>Earth Observation Intelligence</p>
      </div>

      <div className="system-status">
        <span className="status-dot"></span>
        <span>{apiError ? "Backend Offline" : "System Online"}</span>
      </div>
    </header>

    <section className="workspace">
      <aside className="sidebar">
        <section className="panel">
          <h2>Location Search</h2>
          <p className="panel-text">
            Search for a region to begin environmental monitoring.
          </p>

          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Nairobi or Turkana"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </form>

          {searchMessage && (
            <p className="search-message">{searchMessage}</p>
          )}

          {isLoadingLocations && (
            <p className="search-message">Loading locations from backend...</p>
          )}

          {apiError && <p className="error-message">{apiError}</p>}

        </section>

        <section className="panel">
          <h2>Selected Region</h2>

          <div className="region-card">
            {selectedLocation ? (
              <div className="region-details">
                <strong>{selectedLocation.name}</strong>
                <span>{selectedLocation.country}</span>
                <p>{selectedLocation.latitude}</p>
                <small>
                  Lat: {selectedLocation.latitude} | Lng: {selectedLocation.longitude}
                </small>
              </div>
            ) : (
              <span className="empty-state">No region selected yet</span>
            )}
          </div>
        </section>

        <section className="panel">
          <h2>Map Layer</h2>

            <div className="layer-switcher">
              
            <button
              type="button"
              className={activeLayerId === "street" ? "layer-button active" : "later-button"}
              onClick={() => setActiveLayerId("street")}
            >
              Street
            </button>

            <button
              type="button"
              className={activeLayerId === "street" ? "layer-button active" : "later-button"}
              onClick={() => setActiveLayerId("satellite")}
            >
              Satellite
            </button>
          </div>

          <div className="layer-summary">
            <span>Active Layer</span>
            <strong>{activeLayer.name}</strong>
            <small>{activeLayer.type}</small>
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
      <div className="map-card">
        <MapContainer
          center={KENYA_CENTER}
          zoom={6}
          scrollWheelZoom={true}
          className="leaflet-map"
        >
          <TileLayer
            key={activeLayer.id}
            attribution={activeLayer.attribution}
            url={activeLayer.url}
          />

          <MapController selectedLocation={selectedLocation} />

          {locations.map((location) => (
            <CircleMarker
              key={location.id}
              center={[location.latitude, location.longitude]}
              radius={10}
              pathOptions={{
                color: selectedLocation?.id === location.id ? "#b7791f" : "#236b49",
                fillColor: selectedLocation?.id === location.id ? "#f6ad55" : "#2db36d",
                fillOpacity: 0.9
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

        <section className="Insight-bar">
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
            <strong>{activeLayer.name}</strong>
          </div>
        </section>
      </section>
    </section>
  </main>
 );
}

export default App;