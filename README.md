#ASTRA

ASTRA is an AI-powered Earth Observation plaform designd to hep users monitor vegetation health, predict drought risk, assess environmental threats, and generate actionable insights from satellite and climate data.

## Project Vision

ASTRA helps users select any location on Earth, view environmental data, and receive AI-generated Insights in a clear dashboard.

The long-term goal is to support:

-Satellite imagery visualization
-Vegetation health analysis
-Drought prdeiction
-Flood and disaster monitoring
-AI-generated environment reports

## phase 1 Goal

Build the foundation of ASTRA.

The Phase 1 system allows a user to:

-Open the frontend app
-Open the backend API
-Search for Nairobi
-Search for Turkana
-View selected locations on an interactive map
-Connect the React frontend to the FastAPI backend

## Tech Stack

### Frontend

-React
-Vite
-Leaflet
-React Leafler
-CSS

### Backend

-FastAPI
-Uvicorn
-Python

## Repository Structure



## Backend Setup

Move into the backend folder:

'''bash
$ cd backend

Create a virtual environment:

'''bash
$ python -m venv venv

Activate the virtual environment:

'''bash
$ venv\Scripts\activate

Install dependencies:

'''bash
$ pip install -r requirements.txt

Run the backend server:

'''bash
$ uvicorn main:app --reload

The backend should run at:

'''text
http://127.0.0.1:8000/

## Backend API Endpoints:

'''text
GET /
GET /health
GET /locations
GET /locations/Nairobi
GET /locations/Turkana

Example:

'''text
http://127.0.0.1:8000/locations

## Frontend setup

Move into the frontend folder:

'''bash
$ cd frontend

Install dependencies:

'''bash
$ npm install

Run the frontend:

'''bash
$ npm run dev

The frontend should run at:

'''text
http://localhost:5173/

## Phase 1 Features

-React app shell
-FastAPI backend
-CORS connection between frontend and backend
-Interactive Leaflet Map
-Nairobi and Turkana markers
-Location search
-Selected region details panel
-Backend connection status

## Current status

Project Status: In Development
Current Phase: Foundation complete