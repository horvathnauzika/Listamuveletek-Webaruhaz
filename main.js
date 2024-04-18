import { ADATOK } from "./adat.js";
import { megjelenit, tablazatletrehoz } from "./tablazat.js";
init(ADATOK);


function init(lista){
    let txt = tablazatletrehoz(lista);
    tablazatletrehoz(lista);
    megjelenit(txt);
}