import { useF1 } from "../hooks/useF1";
import { StadingsCard } from "./StadingsCard";

type ChampionshipSectionProps = {
  title: string;
};

export const DriversChampionship = ({ title }: ChampionshipSectionProps) => {
  const { driverStandings } = useF1();
  return (
    <div>
      <h1 className="text-4xl font-bold pb-5 text-white">{title}</h1>

      {driverStandings.map((driver, index) =>
  index < 5 ? (
    <StadingsCard
      key={driver.position}
      position={driver.position}
      name={`${driver.driver.name} ${driver.driver.surname}`}
      team={driver.team.teamName}
      points={driver.points}
      img={`/Pilotos/${driver.driver.name}.webp`}
    />
  ) : null
)}
      
      
    </div>
  );
};
