export function kosarLetrehoz(lista){
    let txt = "<div class='table-responsive'><table class='table'>";
    txt += "<thead>";
    txt += "<tr class='table-dark'><th>Név</th><th>Kép</th><th>Ár (Ft)</th><th>Darabszám</th></tr>"
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
        txt += `<tr class='table-info'>
        <td>${elem.cim}</td>
            <td><img src="${elem.kep}" alt="kep" width="113" height="85"></td>
            <td>${elem.dbszam*elem.ar}</td>
            <td>${elem.dbszam}</td>
        </tr>`
    });
    txt += "</tbody>"
    txt += "</table></div>";
    return txt
}

export function kosarMegjelenit(txt){
    const ELEM=$(".kosar")
    ELEM.html(txt)
}


