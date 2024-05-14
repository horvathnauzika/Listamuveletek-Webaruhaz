export function publikusTablazatLetrehoz(lista){
    let txt = "";
    lista.forEach((elem, index) => {
        txt += `<div class='card col-md-3' style='width:400px;'>
        <img class="card-img-top" src="${elem.kep}" alt="Card image">
        <div class="card-body">
        <h4 class="card-title">${elem.cim}</h4>
        <p class="card-text">Ár: ${elem.ar} Ft</p>
        <p class="card-text">${elem.leiras}</p>
        <a href="#" class="btn btn-primary kosarba" id="pub${index}">Kosárba teszem</a>
        </div>
        </div>
        
        `
    });
    return txt;
}

export function publikusTablazatMegjelenit(txt){
    const ELEM=$(".tartalom")
    ELEM.html(txt)
}