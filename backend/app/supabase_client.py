# backend/app/supabase_client.py

from supabase import create_client, Client
import os

# Load environment variables
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Create Supabase client
def get_supabase_client() -> Client:
    return create_client(SUPABASE_URL, SUPABASE_KEY)
