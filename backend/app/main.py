# backend/app/main.py

from fastapi import FastAPI
from .auth.routes import router as auth_router
from .career_ai.routes import router as ai_router
from .feedback_analyser.routes import router as feedback_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add this before including routers
app.add_middleware(
       CORSMiddleware,
       allow_origins=["http://localhost:3000"],  # or ["*"] for all origins (not recommended for production)
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )

# Include routers for different modules
app.include_router(auth_router)
app.include_router(ai_router)
app.include_router(feedback_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Career Path AI Backend!"}
