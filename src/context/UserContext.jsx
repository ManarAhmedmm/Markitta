
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const register = (name, email, password) => {
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
  };

  const login = (email, password) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setCurrentUser(found);
      localStorage.setItem("currentUser", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider value={{ users, currentUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};