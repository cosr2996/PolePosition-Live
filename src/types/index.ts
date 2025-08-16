// types/f1.ts
export interface Driver {
  driverId: string;
  code: string;
  name: string;
  surname:string
  nationality: string;
  number: number;
}

export interface Team {
  teamName:string
}

export interface DriverStanding {
  classificationId: number;
  driverId: string;
  points: number;
  position: number;
  wins: number;
  driver: Driver;
  team:Team
}

export interface ConstructorsStanding {
  classificationId: number;
  driverId: string;
  points: number;
  position: number;
  wins: number;
  teamId:string
  team:Team
}

export interface F1ContextType {
  driverStandings: DriverStanding[],
  ConstructorsStandings:ConstructorsStanding[]
}