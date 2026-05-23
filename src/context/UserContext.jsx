// src/context/UserContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const API_URL = "http://localhost:3001";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

 
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    localStorage.removeItem("currentUser");
  }, []);

  
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetch(`${API_URL}/users`);
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load users:", err);
      }
    };
    loadUsers();
  }, []);

  
  const register = async (name, email, password) => {
  
    const checkRes = await fetch(
      `${API_URL}/users?email=${encodeURIComponent(email)}`
    );
    const exists = await checkRes.json();
    if (exists.length > 0) throw new Error("Email already registered");

    const newUser = {
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
    };

    const res = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) throw new Error("Failed to register");

    const savedUser = await res.json();
    setUsers((prev) => [...prev, savedUser]);
    return savedUser;
  };

  const login = async (email, password) => {
    const res = await fetch(
      `${API_URL}/users?email=${encodeURIComponent(email)}`
    );
    if (!res.ok) return false;

    const found = await res.json();
    if (found.length === 0) return false;

    if (found[0].password !== password) return false;

    setCurrentUser(found[0]);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};