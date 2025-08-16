// context/F1Context.tsx
import { createContext, useState, useEffect } from "react";
import type { ConstructorsStanding, DriverStanding,F1ContextType} from "../types";



export const F1Context = createContext<F1ContextType | null>(null);

export const F1Provider = ({ children }: { children: React.ReactNode }) => {
  const [driverStandings, setDriverStandings] = useState<DriverStanding[]>([]);
  const [ConstructorsStandings, setConstructorsStandings] = useState<
    ConstructorsStanding[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [driversRes, constructorsRes] = await Promise.all([
          fetch("https://f1api.dev/api/current/drivers-championship"),
          fetch("https://f1api.dev/api/current/constructors-championship"),
        ]);

        const driversJson = await driversRes.json()
        const constructorsJson = await constructorsRes.json()
        
        setDriverStandings(driversJson.drivers_championship);
        setConstructorsStandings(constructorsJson.constructors_championship);

      } catch (error) {
        console.error("Error al obtener datos de drivers-championship:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <F1Context.Provider value={{ driverStandings ,ConstructorsStandings }}>
      {children}
    </F1Context.Provider>
  );
};
