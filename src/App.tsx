import { ConstructorsChampionship } from "./components/ConstructorsChampionship";
import { DriversChampionship } from "./components/DriversChampionship";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { NextRace } from "./components/NextRace";
import { useF1 } from "./hooks/useF1";

function App() {
  const { driverStandings } = useF1();
  console.log(driverStandings);

  return (
    <div className="flex flex-col min-h-screen bg-[#1C1C1C]">
      <NavBar />

      <main className="flex-grow">
        <NextRace />

       

        <div className="p-3 flex justify-between my-5 items-center">
          <DriversChampionship title={"Drivers Championship"} />
          <ConstructorsChampionship />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
