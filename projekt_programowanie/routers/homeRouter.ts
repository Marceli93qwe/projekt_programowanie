import {Router} from "express";
import {MatchRepository} from "../repositories/match.repository";


export const homeRouter = Router();


homeRouter.get("/", (req, res) => {
    const matches = MatchRepository.findAll();
    res.render("sites/home",
        {matches}
    );
})