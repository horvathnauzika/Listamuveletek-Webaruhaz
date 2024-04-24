import { ADATOK } from "./adat.js";
import { rendez, szerkeszt, szuresAr, szuresCim, szuresLeiras, torol } from "./adatkezelo.js";
import { megjelenit, tablazatletrehoz } from "./tablazat.js";

let rIrany = 1;
init(ADATOK);
szuresArSzerint();
szuresCimSzerint();
szuresLeirasSzerint();

function init(lista) {
  let txt = tablazatletrehoz(lista);
  tablazatletrehoz(lista);
  megjelenit(txt);
  rendezes();
  torolesemeny();
  szerkesztesemeny();
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

function szuresArSzerint() {
  const szuroElem = $("#ar");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresAr(ADATOK, szoveg));
  });
}

function szuresCimSzerint() {
  const szuroElem = $("#szcim");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresCim(ADATOK, szoveg));
  });
}

function szuresLeirasSzerint() {
  const szuroElem = $("#szleiras");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresLeiras(ADATOK, szoveg));
  });
}

function torolesemeny(){
  const torolELEM=$(".torol")
  torolELEM.on("click", function(event){
    let index = event.target.id;
    const LISTA = torol(ADATOK, index)
    init(LISTA)
  })
}

function szerkesztesemeny(){
  const szerkesztELEM = $(".szerkeszt")
  szerkesztELEM.on("click", function(event){
    let index = event.target.id;
    const LISTA = szerkeszt(ADATOK, index)
    init(LISTA)
  })
}