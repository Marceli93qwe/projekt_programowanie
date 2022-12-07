import {Router} from "express";
import {CountryRepository} from "../repositories/country.repository";

export const CountriesRouter = Router();

CountriesRouter.get("/:country", (req, res) => {
    const {country: countryName} = req.params;
    const {
        name,
        trainers,
        midfielders,
        defenders,
        goalkeepers,
        polishName,
        attackers
    } = CountryRepository.getOne(countryName);
    res.render("sites/country", {
        name,
        trainers,
        midfielders,
        defenders,
        goalkeepers,
        polishName,
        attackers,
    })
})