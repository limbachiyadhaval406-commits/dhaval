import { createContext, useContext, useState } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  const addToTeam = (hero) => {
    const exists = team.find(item => item.id === hero.id);
    if (!exists) {
      setTeam([...team, hero]);
    }
  };

  const removeFromTeam = (id) => {
    setTeam(team.filter(item => item.id !== id));
  };

  return (
    <TeamContext.Provider value={{ team, addToTeam, removeFromTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);
