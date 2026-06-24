import React, { createContext, useContext, useEffect, useState } from "react";
type User = {
  name: string | undefined;
  email: string | undefined;
};

type AuthContextType = {
  user: User | undefined;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  loading: true,
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Here you would typically fetch user data from an API or local storage
      // For this example, we'll just set some dummy data

      setUser({ name: "RJ", email: "RZ@example.com" }); // Simulate a logged-in user
    } catch (error) {
      console.error("Error checking user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
