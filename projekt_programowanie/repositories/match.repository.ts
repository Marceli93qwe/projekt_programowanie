import {Match, matches} from "../web-data/match-data";

export class MatchRepository {
    constructor() {
    }

    static findAll(): Match[] {
        return matches;
    }
}