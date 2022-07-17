import { Center, Spinner } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { supabase } from "../utils/auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(supabase.auth.user());
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setIsFetchingUser(true);
      setCurrentUser(session?.user);
    });
  }, []);

  useEffect(() => {
    setIsFetchingUser(false);
  }, [currentUser]);

  const signUpWithEmail = async (creds) => {
    const { error } = await supabase.auth.signUp({
      email: creds.email,
      password: creds.password,
    });

    return {
      error: error ? error : null,
    };
  };

  const signInWithEmail = async (creds) => {
    const { error } = await supabase.auth.signIn({
      email: creds.email,
      password: creds.password,
    });

    return {
      error: error ? error : null,
    };
  };

  const signInWithAuthProvider = async (provider) => {
    setIsFetchingUser(true);
    const { error } = await supabase.auth.signIn(
      {
        provider,
      },
      {
        redirectTo: "http://localhost:3000/dashboard",
      }
    );

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

  if (isFetchingUser)
    return (
      <Center h="100vh" w="100vw">
        <Spinner size="xl" />
      </Center>
    );

  return (
    <AuthContext.Provider
      value={{
        isFetchingUser,
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
