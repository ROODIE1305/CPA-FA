// frontend/src/auth.js

import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your Supabase credentials
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export const loginUser = async (email, password) => {
  const { user, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return user;
};

export const signupUser = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return user;
};

export default supabase;
