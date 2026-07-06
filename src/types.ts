export interface Player {
  id: string;
  name: string;
  email: string;
  division: string; // "Grupo 1", "Grupo 2", "Grupo 3"
  points: number;   // Current round points
  played: number;   // Current round matches played
  won: number;      // Current round matches won
  lost: number;     // Current round matches lost
  setsWon: number;  // Current round sets won (for tiebreaker)
  setsLost: number; // Current round sets lost (for tiebreaker)
  gamesWon: number; // Current round games won (for secondary tiebreaker)
  gamesLost: number;// Current round games lost (for secondary tiebreaker)
  role: 'admin' | 'player';
  createdAt?: any;
  partnerId?: string | null;
}

export interface Match {
  id: string;
  type: 'singles' | 'doubles';
  division: string;
  playerIds: string[];
  playerNames: { [id: string]: string };
  team1: string[]; // array of player ids
  team2: string[]; // array of player ids
  score: {
    set1: [number, number];
    set2: [number, number];
    set3?: [number, number];
  };
  winnerTeam: 1 | 2;
  pointsAwarded: { [id: string]: number };
  date: number; // timestamp
  roundId: string; // ID of the Jornada
}

export interface PromotionDemotionHistory {
  playerId: string;
  playerName: string;
  fromDivision: string;
  toDivision: string;
  type: 'promoted' | 'demoted' | 'stayed';
  points: number;
}

export interface Round {
  id: string;
  number: number;
  startDate: number;
  endDate: number;
  status: 'active' | 'completed';
  promotionsDemotions?: PromotionDemotionHistory[];
}

export interface AppSettings {
  roundDurationDays: number;
  promotionCount: number; // Number of players who promote/demote
}
