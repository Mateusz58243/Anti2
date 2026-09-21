let szamok = [];
let szsorban = [];

function getOtoslottoSzamok() {
    szamok = [];
    while (szamok.length < 5) {
        let ujSzam = Math.floor(Math.random() * 90) + 1;
        if (!szamok.includes(ujSzam)) {
            szamok.push(ujSzam);
        }
    }
    return szamok;
}

console.log(getOtoslottoSzamok());

function getSortedNumbers(szamok) {
    return szsorban = szamok.sort((a, b) => a - b);
}

console.log(getSortedNumbers(szamok));

//két paramétert kap, egy tömböt lottószámokkal és egy tömböt a tippekkel. Visszaadja, hogy a tippekből hány egyezett meg a lottószámokkal

function getTalalatok(lottoszamok, tippek) {
    return tippek.filter(tipp => lottoszamok.includes(tipp)).length;
}

console.log(getTalalatok(szamok,getOtoslottoSzamok()));

function getHaviLottoSzamok()
{
    let haviLottoSzamok = [];
    for (let i = 0; i < 4; i++) {
        haviLottoSzamok.push(getOtoslottoSzamok());
    }
    return haviLottoSzamok;
}


console.log(getHaviLottoSzamok());

function getHaviKihuzottSzamok()
{
    let haviLottoSzamok = getHaviLottoSzamok();
    let kihuzottSzamok = [];
    for (let i = 0; i < haviLottoSzamok.length; i++) {
        kihuzottSzamok.push(...haviLottoSzamok[i]);
    }
    return [...new Set(kihuzottSzamok)];
}

console.log(getHaviKihuzottSzamok());


