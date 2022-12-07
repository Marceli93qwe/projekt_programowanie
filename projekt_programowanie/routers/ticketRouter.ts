import {Router} from "express";
import {pool} from "../utils/db";
import {v4 as uuid} from "uuid";
import {RowDataPacket} from "mysql2";

export const ticketRouter = Router();


ticketRouter.get("/:match", async (req, res) => {
    const {match} = req.params;
    const result = await pool.execute('SELECT `amount_of_tickets` from `matches` where `matchName` = ?', [match]) as RowDataPacket[];
    if (result[0][0]["amount_of_tickets"] < 1) {
        return res.render("sites/message", {
            message: "Niestety nie mamy już tych biletów"
        })
    }
    res.render("sites/buy-a-ticket", {match, tickets: result[0][0]["amount_of_tickets"]});
})

ticketRouter.post("/", async (req, res) => {
    const {match, name, surname, tickets} = req.body;
    if (tickets < 1) return res.render("sites/message", {message: "Niestety nie mamy już tych biletów"})
    if (name.trim().length < 3 || surname.trim().length < 3 || name.trim().length > 30 || surname.trim().length > 30) {
        res.status(400);
        return res.render("sites/message", {
            message: "podano złe dane do rezerwacji"
        })
    }
    const orderId = uuid();
    pool.execute("INSERT INTO `rezerwacje` (`id`, `name`, `surname`, `match`) VALUES (?,?,?,?)", [orderId, name, surname, match]);
    pool.execute("UPDATE `matches` SET `amount_of_tickets` = ? where `match` = ?", [tickets - 1, match]);
    res.render("sites/message", {
        message: `ID twojej rezerwacji to ${orderId}`,
    })
})