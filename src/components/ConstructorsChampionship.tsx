import { useF1 } from "../hooks/useF1";
import { StadingsCard } from "./StadingsCard";

export const ConstructorsChampionship = () => {
  const { ConstructorsStandings } = useF1();
  return (
    <div>
      <h1 className="text-4xl font-bold pb-5 text-white">Constructors Championship</h1>
      {ConstructorsStandings.map((constructor, index) =>
        index < 5 ? (
          <StadingsCard
            position={constructor.position}
            team={constructor.team.teamName}
            points={constructor.points}
            img={`/teams/${constructor.teamId}.webp`}
          />
        ) : null
      )}
    </div>
  );
};
