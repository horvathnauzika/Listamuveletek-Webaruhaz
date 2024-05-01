import { ADATOK } from "./adat.js";
import { rendez, szerkeszt, szuresAr, szuresCim, szuresLeiras, torol } from "./adatkezelo.js";
import { publikusTablazatLetrehoz, publikusTablazatMegjelenit } from "./publikusTablazat.js";
import { kosarLetrehoz, kosarMegjelenit } from "./kosar.js";
import { megjelenit, adminTablazatLetrehoz } from "./adminTablazat.js";

let rIrany = 1;
let kosarTomb = [];
init(ADATOK);
szuresArSzerint();
szuresCimSzerint();
szuresLeirasSzerint();
kosarbaRak();


function initPublikusTablazat(lista){
  let txtKartya = publikusTablazatLetrehoz(lista);
  publikusTablazatMegjelenit(txtKartya);
}

function init(lista) {
  let txt = adminTablazatLetrehoz(lista);
  adminTablazatLetrehoz(lista);
  megjelenit(txt);
  rendezes();
  torolesemeny();
  szerkesztesemeny();
  initPublikusTablazat(lista);
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
  const szuroElem = $(".kereses_ar");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresAr(ADATOK, szoveg));
  });
}

function szuresCimSzerint() {
  const szuroElem = $(".kereses_cim");
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

function kosarbaRak(){
  const GOMB = $('.kosarba')
  GOMB.on("click", function(event){
      console.log(event.target.id.replace('pub', ''))
      let index = event.target.id.replace('pub', '')
      index = Number(index)
      let ujElem = ADATOK[index];

      let voltBenne = false
      kosarTomb.forEach(elem => {
        if(elem.cim == ujElem.cim){
          elem.dbszam++;
          console.log(ujElem)
          voltBenne = true;
        }
        
      });
      if (!voltBenne){
        ujElem.dbszam = 1;
        kosarTomb.push(ujElem)
     }

     let txtKosar = kosarLetrehoz(kosarTomb);
  
     kosarMegjelenit(txtKosar);

  })
}

