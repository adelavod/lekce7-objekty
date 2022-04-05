let poleCisel = [280, 15, 4999, 120]

console.log(poleCisel);
poleCisel.sort(porovnej);
console.log(poleCisel);
function porovnej(cis1,cis2) {
    if (cis1 > cis2) {
        return 1;
    } else { return -1;
    }
};

// Máme pole osob
let poleOsob = [
    {jmeno: "Anduril", vek: 15000},
    {jmeno: "Ema", vek: 3 },
    {jmeno: "Ludmila", vek: 98 },
    {jmeno: "Antonin", vek: 45},
    {jmeno: "Elrond", vek: 2000},
    {jmeno: "Tomasek", vek: 9}
];
console.log(poleOsob);

// Porovnáváme osoby podle jednoho klíče

poleOsob.sort(porovnej);

function porovnej(cis1, cis2){
    if (cis1.vek > cis2.vek) {
        return 1;
    } else {
        return -1;
    }
};

console.log(poleOsob);

// Přidáváme nový klíč s hodnotami pro každý objekt v pole objektů!

poleOsob.forEach(pridejNarozeni); // přidá rok narození

function pridejNarozeni(osoba) {
    osoba.narozeni = 2022 - osoba.vek;
    return osoba;
}

console.log(poleOsob);

// FILTR POLE // úplně zatím mi to tak nefunguje no
/* 
dospeleOsoby.filter(najdiDospele);
function najdiDospele(clovek) {
    if (clovek.vek>18){
        return true;
    } else {
        return false;
    }}; */

    
// FILTR, který funguje:

    let Dospeli = poleOsob.filter(checkAdult);
    function checkAdult(person) {
        return person.vek > 18;
    };
console.log("dospělí:")
console.log(Dospeli);

    // Tohle přidá nový klíč DOSPĚLOST podle věku ve formě true-false
    poleOsob.forEach(pridejDospelost);
    function pridejDospelost(osoba) {
        if (osoba.vek>18) {
            osoba.dospelost = true;
        } else {
            osoba.dospelost = false;
        }
        return osoba;
    }
    

console.log(poleOsob);