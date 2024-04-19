export function tablazatletrehoz(lista){
    let txt = "<div class='table-responsive'><table class=' table table-striped'>";
    txt += "<thead>";
    txt += "<tr><th>Cím</th><th>Kép</th><th>Ár (Ft)</th><th>Leírás</th><th></th></tr>"
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
        txt += `<tr>
            <td>${elem.cim}</td>
            <td><img src="${elem.kep}" alt="kep" width="226" height="170"></td>
            <td>${elem.ar}</td>
            <td>${elem.leiras}</td>
            <td><button id="${index}" class="torol">❌</button></td>
        </tr>`
    });
    txt += "</tbody>"
    txt += "</table></div>";
    return txt
}

export function megjelenit(txt){
    const ELEM=$(".adatok")
    ELEM.html(txt)
}