import {countriesData, Country} from "../web-data/countries-data";


export class CountryRepository {
    constructor() {
    }

    static getOne(name: string): Country {
        return countriesData.filter((el) => el.name === name)[0];
    }
}