from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="ASTRA API",
    description="Backend API for the ASTRA Earth Observation platform",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

LOCATIONS = [
    {
        "id": 1,
        "name": "Nairobi",
        "country": "Kenya",
        "latitude": -1.286389,
        "longitude": 36.817223,
        "description": "Kenya's capital city and a major urban monitoring region",
    },
    {
        "id": 2,
        "name": "Turkana",
        "country": "Kenya",
        "latitude": 3.312247,
        "longitude": 35.565786,
        "description": "A semi-arid region important for drought and vegetation monitoring",
    }
]

@app.get("/")
def root():
    return {
        "message": "ASTRA API is running",
        "status": "ok"
    }

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "astra-backend"
    }

@app.get("/locations/{location_name}")
def get_location(location_name: str):
    for location in LOCATIONS:
        if location["name"].lower() == location_name.lower():
            return {
                "found": True,
                "location": location
            }
        
    return {
        "found": False,
        "message": f"Location '{location_name}' was not found"
    }