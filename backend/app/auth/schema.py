# backend/app/auth/schema.py

from pydantic import BaseModel

class User(BaseModel):
    email: str
    password: str
