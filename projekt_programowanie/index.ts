import * as express from "express";
import {engine} from "express-handlebars";
import {CountriesRouter} from "./routers/countriesRouter";
import {homeRouter} from "./routers/homeRouter";
import {ticketRouter} from "./routers/ticketRouter";
import {urlencoded} from "body-parser";


const app = express();


app.use(express.static('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers, // Dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
}));
app.set('view engine', '.hbs');
app.use(urlencoded({extended: false}));
app.use("/countries", CountriesRouter);
app.use("/", homeRouter);
app.use("/ticket", ticketRouter);
app.listen(3000, () => console.log("listening on http://localhost:3000"));