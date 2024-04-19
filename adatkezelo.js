export function rendez(lista, kulcs, rIrany){
  const rendezett_lista = lista.sort(function (a1, a2) {
    return a1[kulcs] < a2[kulcs] ? -1 * rIrany : 1 * rIrany;
  });
  return rendezett_lista;
}

export function szures(lista, keresesAr) {
    const szurt_lista = lista.filter(function (adat) {
      return adat.ar.toString().includes(keresesAr);
    });
    
    return szurt_lista;
  }