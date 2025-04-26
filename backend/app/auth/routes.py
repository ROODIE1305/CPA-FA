# backend/app/auth/routes.py

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from .schema import User
from ..supabase_client import get_supabase_client

router = APIRouter()

@router.post("/login")
async def login(user: User):
    supabase = get_supabase_client()
    
    # Authenticate user (you can use Supabase Auth here)
    response = supabase.auth.sign_in(email=user.email, password=user.password)
    if response.get("error"):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    return {"message": "Login successful", "user": response}

class User(BaseModel):
    email: str
    password: str
