import { useF1 } from "../hooks/useF1";
import { StadingsCard } from "./StadingsCard";

export const StadingsConstructors = () => {
  const { ConstructorsStandings } = useF1();
  return (
    <div>
      <div>
        {ConstructorsStandings.map((constructor) => (
          <StadingsCard
            position={constructor.position}
            team={constructor.team.teamName}
            points={constructor.points}
            img={`/teams/${constructor.teamId}.webp`}
          />
        ))}
      </div>
    </div>
  );
};
