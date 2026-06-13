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