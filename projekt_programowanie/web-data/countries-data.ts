export interface Country {
    name: string;
    polishName: string;
    trainers: string[];
    goalkeepers: string[];
    defenders: string[];
    midfielders: string[];
    attackers: string[];
}


export const countriesData: Country[] = [
    {
        name: "croatia",
        polishName: "Chorwacja",
        trainers: ["testowy trener"],
        defenders: ["TESTOWY OBRONCA"],
        goalkeepers: ["TESTOWY BRAMKARZ"],
        midfielders: ["TESTOWY POMOCNIK"],
        attackers: ["TESTOWY NAPASTNIK"],
    },
    {
        name: "nederlands",
        polishName: "Holandia",
        trainers: ["Testowy trener"],
        defenders: ["TESTOWY OBRONCA"],
        goalkeepers: ["TESTOWY BRAMKARZ"],
        midfielders: ["TESTOWY POMOCNIK"],
        attackers: ["TESTOWY NAPASTNIK"],
    }
]