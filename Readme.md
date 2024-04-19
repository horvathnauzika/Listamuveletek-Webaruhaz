# Listakezelő függvények - Webáruház

## Föggvények
1. *** tablazatletrehoz(lista) *** - txt - lista alapján készít egy html kódot, ami egy táblázat, visszatérési értéke az elkészült html szöveget minden sor mellett egy törlés ikonnal
2. *** megjelenit(txt) *** - txt - megjeleníti a paraméterben kapott szöveget egy adott html elemben
3. *** rendez(lista, kulcs, rIrany) *** - rendezett_lista megrendezi a listát az adott paraméter szerint, a megrendezett listát visszaadja, akkor fut le, amikor rákattintunk a táblázat fejlécére
4. *** szures(lista, kereses); *** -> visszatérési értéke: egy újabb lista, neve szurt_lista - akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) - a listában a mezőkben keres egyezéseket, és szűri a listát ez alapján - filter
5. *** torol(index, lista); *** - törli a lista indexedik sorát, minden sor mellett lesz egy töröl ikon, amire kattintva megkapjuk az adott sor indexet, és meghívódik a torol függvény
6. *** kosarbaRak(lista) *** ->  ha a "Kosárba teszem" gombra kattintunk, az adott div adatai átkerülnek a kosárba