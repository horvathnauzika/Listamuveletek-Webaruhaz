import { ADATOK } from "./adat.js";
import { rendez, szerkeszt, szuresAr, szuresCim, szuresLeiras, torol} from "./adatkezelo.js";
import { publikusTablazatLetrehoz, publikusTablazatMegjelenit } from "./publikusTablazat.js";
import { kosarLetrehoz, kosarMegjelenit } from "./kosar.js";
import { megjelenit, adminTablazatLetrehoz } from "./adminTablazat.js";

let kosarTomb = [];
init(ADATOK);
szuresArSzerint();
szuresCimSzerint();
szuresLeirasSzerint();
rendezes(ADATOK);

function initPublikusTablazat(lista){
  let txtKartya = publikusTablazatLetrehoz(lista);
  publikusTablazatMegjelenit(txtKartya);
}

function init(lista) {
  let txt = adminTablazatLetrehoz(lista);
  adminTablazatLetrehoz(lista);
  megjelenit(txt);
  initPublikusTablazat(lista);
  szerkesztesemeny();
  torolesemeny();
  kosarbaRak();
}

function rendezes(ADATOK) {
  const SELECT = $(".options")
  SELECT.on("change", function(){
    if(this.value == "nevcsokkeno"){
      const lista = rendez(ADATOK, "cim", -1);
      console.log(lista);
      init(lista);
    }
    else if(this.value == "nevnovekvo"){
      const lista = rendez(ADATOK, "cim", 1);
      console.log(lista);
      init(lista);
    }
    else if(this.value == "arcsokkeno"){
      const lista = rendez(ADATOK, "ar", -1);
      console.log(lista);
      init(lista);
    }
    else if(this.value == "arnovekvo"){
      const lista = rendez(ADATOK, "ar", 1);
      console.log(lista);
      init(lista);
    }
    else if(this.value == "default"){
      init(ADATOK)
    }
  })
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

export function kosarTorolEsemeny(){
  const torolELEM=$(".kosarTorol")
  torolELEM.on("click", function(event){
    let index = event.target.id;
    const LISTA = torol(kosarTomb, index)
    let txtKosar = kosarLetrehoz(kosarTomb);
    kosarMegjelenit(txtKosar);
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
      console.log(index)
      let voltBenne = false
      let vegosszeg = 0

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

     kosarTomb.forEach(elem =>{
      vegosszeg += elem.dbszam*elem.ar
      console.log(vegosszeg)
     })

     const vegosszegkiir = $('.vegosszeg')
     vegosszegkiir.html("<p>Végösszeg: " + vegosszeg + " Ft</p>")

     let txtKosar = kosarLetrehoz(kosarTomb);
  
     kosarMegjelenit(txtKosar);
  })
}
