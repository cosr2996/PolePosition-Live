
type StadingsCardProps ={
  position:number,
  name?:string,
  team:string,
  points:number,
  img:string
}

export const StadingsCard = ({position,name,team,points,img}:StadingsCardProps) => {
  return (
    <div className="border-2 bg-[#F5F5F5] flex items-center w-150 gap-5 p-2 rounded-2xl m-3 justify-around h-25">

      <div className="flex items-center gap-5">
        <p className="text-5xl font-bold">#{position}</p>
        <img src={img}  alt="piloto de f1" className="h-15" />
      </div>

      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-red-800 w-50 font-bold ">{team}</p>
      </div>

      <p className="text-4xl font-bold">{points}</p>
    </div>
  );
};
