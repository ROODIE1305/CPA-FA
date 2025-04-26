# backend/app/main.py

from fastapi import FastAPI
from .auth.routes import router as auth_router
from .career_ai.routes import router as ai_router
from .feedback_analyser.routes import router as feedback_router

app = FastAPI()

# Include routers for different modules
app.include_router(auth_router)
app.include_router(ai_router)
app.include_router(feedback_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Career Path AI Backend!"}
