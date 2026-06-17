# ASTRA

ASTRA is an AI-powered Earth Observation platform designed to help users monitor vegetation health, predict drought risk, assess environmental threats, and generate actionable insights from satellite and climate data.

## Project Vision

ASTRA helps users select any location on Earth, view environmental data, and receive AI-generated insights in a clear dashboard.

The long-term goal is to support:

- Satellite imagery visualization
- Vegetation health analysis
- Drought prediction
- Flood and disaster monitoring
- AI-generated environmental reports

## Phase 1 Goal

Build the foundation of ASTRA.

The Phase 1 system allows a user to:

- Open the frontend app
- Open the backend API
- Search for Nairobi
- Search for Turkana
- View selected locations on an interactive map
- Connect the React frontend to the FastAPI backend

## Tech Stack

### Frontend

- React
- Vite
- Leaflet
- React Leaflet
- CSS

### Backend

- FastAPI
- Uvicorn
- Python

## Repository Structure

```text
ASTRA/
├── backend/
|   ├──__pycache__/
|   |   └──main.cpython-313.pyc
│   ├── analytics/
│   ├── api/
│   ├── models/
│   ├── main.py
│   └── requirements.txt
├── datasets/
├── docs/
├── frontend/
│   ├── dashboard/
│   ├── map/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── reports/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── research/
├── tests/
├── .gitattributes
├── .gitignore
└── README.md
```

## Backend Setup

1. Move into the backend folder:

```bash
cd backend
```

2. Create a virtual environment:

```bash
python -m venv venv
```

3. Activate the virtual environment:

```bash
venv\Scripts\activate
```

4. Install dependencies:

```bash
pip install -r requirements.txt
```

5. Run the backend server:

```bash
uvicorn main:app --reload
```

The backend should run at:

```text
http://127.0.0.1:8000/
```

## Backend API Endpoints

- `GET /`
- `GET /health`
- `GET /locations`
- `GET /locations/Nairobi`
- `GET /locations/Turkana`

Example:

```text
http://127.0.0.1:8000/locations
```

## Frontend Setup

1. Move into the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the frontend:

```bash
npm run dev
```

The frontend should run at:

```text
http://localhost:5173/
```

## Phase 1 Features

- React app shell
- FastAPI backend
- CORS connection between frontend and backend
- Interactive Leaflet map
- Nairobi and Turkana markers
- Location search
- Selected region details panel
- Backend connection status

## Current Status

- Project Status: In Development
- Current Phase: Foundation complete
