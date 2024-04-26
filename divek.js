export function kartyaLetrehoz(lista){
    let txt = "";
    lista.forEach(elem => {
        txt += `<div class='card col-md-3' style='width:400px'>
        <img class="card-img-top" src="${elem.kep}" alt="Card image">
        <div class="card-body">
        <h4 class="card-title">${elem.cim}</h4>
        <p class="card-text">Ár: ${elem.ar} Ft</p>
        <p class="card-text">${elem.leiras}</p>
        <a href="#" class="btn btn-primary">Kosárba teszem</a>
        </div>
        </div>

        `
    });
    return txt;
}

export function kartyaMegjelenit(txt){
    const ELEM=$(".tartalom")
    ELEM.html(txt)
}