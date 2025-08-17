import { ConstructorsChampionship } from "./components/ConstructorsChampionship";
import { DriversChampionship } from "./components/DriversChampionship";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { NextRace } from "./components/NextRace";
import { StadingsConstructors } from "./components/StadingsConstructors";
import { StadingsDrivers } from "./components/StadingsDrivers";
import { useF1 } from "./hooks/useF1";

function App() {
  const { driverStandings } = useF1();
  console.log(driverStandings);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <NavBar />

      <main className="flex-grow">
        <NextRace />

       

        <div className="p-3 flex justify-between my-5 items-center">
          <DriversChampionship title={"Drivers Championship"} />
          <ConstructorsChampionship />
        </div>
      </main>


      <StadingsDrivers/>
      <StadingsConstructors/>
      <Footer />
    </div>
  );
}

export default App;
