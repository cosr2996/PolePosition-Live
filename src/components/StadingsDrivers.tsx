import { useF1 } from "../hooks/useF1";
import { StadingsCard } from "./StadingsCard";


export const StadingsDrivers = () => {

    const { driverStandings } = useF1();
  return (
    <div>
        <div>
              
        
              {driverStandings.map((driver) =>
                 (
                  <StadingsCard
                    key={driver.position}
                    position={driver.position}
                    name={`${driver.driver.name} ${driver.driver.surname}`}
                    team={driver.team.teamName}
                    points={driver.points}
                    img={`/Pilotos/${driver.driver.name}.webp`}
                  />
                ) 
              )}
            </div>
    </div>
  )
}
