import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(supabase.auth.user());

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setCurrentUser(session?.user);
    });
  }, []);

  const signUpWithEmail = async (creds) => {
    const { user, error } = await supabase.auth.signUp({
      email: creds.email,
      password: creds.password,
    });

    setCurrentUser(user);
    return {
      error: error ? error : null,
    };
  };

  const signInWithEmail = async (creds) => {
    const { user, error } = await supabase.auth.signIn({
      email: creds.email,
      password: creds.password,
    });

    setCurrentUser(user);
    return {
      error: error ? error : null,
    };
  };

  const signInWithAuthProvider = async (provider) => {
    const { user, error } = await supabase.auth.signIn({
      provider,
    });

    setCurrentUser(user);

    return {
      error: error ? error : null,
    };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return {
      error: error ? error : null,
    };
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signOut,
        signInWithEmail,
        signUpWithEmail,
        signInWithAuthProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
