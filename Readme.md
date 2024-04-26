# Listakezelő függvények - Webáruház

## Specifikáció
Készíts "webáruházat" tetszőleges témában. Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen! 
Az adatokat jelenítsd meg egy táblázatban! A formázáshoz bootstrap-et használj! 
A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését!
Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat!
++ A táblázat minden sora mellett legyen egy törlés gomb, amivel az adott sort tudjuk törölni a táblázatból. 
++++ A táblázat minden sora mellett legyen egy szerkesztés gomb, ahol tudjuk szerkeszteni a lista adott sorát!

## Publikus felület
1.  Div-ekben jelenítsük meg az adatokat.
2. Reszponzivitás.
3. Az oldalon legyen szűrési és rendezési lehetőség is!
4. Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
5. ++ Lehet, hogy szükséged lesz a localStorage használatára. 
6. ++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.
7. ++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
8. A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## Függvények
1. *** kartyaLetrehoz(lista) *** - txt - lista alapján készít egy html kódot, ami egy div card, visszatérési értéke az elkészült html szöveg
2. *** kartyaMegjelenit(txt) *** - txt - megjeleníti a paraméterben kapott szöveget egy adott html elemben
3. *** rendez(lista, kulcs, rIrany) *** - rendezett_lista megrendezi a listát az adott paraméter szerint, a megrendezett listát visszaadja, akkor fut le, amikor rákattintunk a táblázat fejlécére
4. *** szures(lista, kereses); *** -> visszatérési értéke: egy újabb lista, neve szurt_lista - akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) - a listában a mezőkben keres egyezéseket, és szűri a listát ez alapján - filter
5. *** torol(index, lista); *** - törli a lista indexedik sorát, minden sor mellett lesz egy töröl ikon, amire kattintva megkapjuk az adott sor indexet, és meghívódik a torol függvény
6. tablazatLetrehoz(lista) -> txt - lista alapján készít egy html kódot, ami egy táblázat, visszatérési értéke az elkészült html táblázat
7. tablazatMegjelenit(txt) -> megjeleníti a paraméterben kapott táblázat szöveget 
8. kosarbaTesz(lista, kosarlista, index) -> lista indexedik sorát beleteszem a kosarlista-ba
9. *** kosarEsemeny() *** ->  ha a "Kosárba teszem" gombra kattintunk, meghívódik a kosarbaTesz függvény, majd utána meghívódik a tablazatLetrehoz a lista tartalmával
10. *** szerkeszt(lista, index) *** -> visszatérési értéke: lista. Kiválasztja a dokumentumból a cím, a leírás és az ár indexedik elemeit, majd a szerkesztett elemeket új változóba rakja. Ha a lista indexedik elemének szerkeszthetősége true volt, akkor átrakja false-ra, ha false, akkor átrakja true-ra.