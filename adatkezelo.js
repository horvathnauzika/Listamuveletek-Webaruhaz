export function rendez(lista, kulcs, rIrany) {
  const rendezett_lista = lista.sort(function (a1, a2) {
    return a1[kulcs] < a2[kulcs] ? -1 * rIrany : 1 * rIrany;
  });
  return rendezett_lista;
}

export function szuresAr(lista, keresesAr) {
  const szurt_lista = lista.filter(function (adat) {
    return adat.ar.toString().includes(keresesAr);
  });
  return szurt_lista;
}

export function szuresCim(lista, keresesCim) {
  const szurt_lista = lista.filter(function (adat) {
    return adat.cim.includes(keresesCim);
  });
  return szurt_lista;
}

export function szuresLeiras(lista, keresesLeiras) {
  const szurt_lista = lista.filter(function (adat) {
    return adat.leiras.includes(keresesLeiras);
  });
  return szurt_lista;
}

export function torol(lista, index){
  lista.splice(index,1)
  return lista;
}

export function szerkeszt(lista, index){

  let cimELEM = $(`#cim${index}`)[0]
  let leirasELEM = $(`#leiras${index}`)[0]
  let arELEM = $(`#ar${index}`)[0]

  if(lista[index].szerkesztheto){
    let ujCim = cimELEM.innerHTML
    let ujLeiras = leirasELEM.innerHTML
    let ujAr = arELEM.innerHTML

    lista[index].cim = ujCim; 
    lista[index].leiras = ujLeiras; 
    lista[index].ar = ujAr; 
  }
  // ha true volt, akkor átrakja false-ra és, ha false volt, átrakja true-ra
  lista[index].szerkesztheto = !lista[index].szerkesztheto
  
  return lista;
}