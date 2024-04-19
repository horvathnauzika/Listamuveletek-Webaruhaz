import { ADATOK } from "./adat.js";
import { rendez, szures } from "./adatkezelo.js";
import { megjelenit, tablazatletrehoz } from "./tablazat.js";

let rIrany = 1;
init(ADATOK);
szuresCimSzerint();

function init(lista) {
  let txt = tablazatletrehoz(lista);
  tablazatletrehoz(lista);
  megjelenit(txt);
  rendezes();
}

function rendezes() {
  const cimMezoELEM = $(".adatok table th").eq(0);
  cimMezoELEM.on("click", function () {
    const lista = rendez(ADATOK, "cim", rIrany);
    console.log(lista);
    init(lista);
    rIrany *= -1;
    console.log(rIrany);
  });

  const arMezoELEM = $(".adatok table th").eq(2);
  arMezoELEM.on("click", function () {
    const lista = rendez(ADATOK, "ar", rIrany);
    console.log(lista);
    init(lista);
    rIrany *= -1;
    console.log(rIrany);
  });
}

function szuresCimSzerint() {
  const szuroElem = $("#ar");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szures(ADATOK, szoveg));
  });
}
