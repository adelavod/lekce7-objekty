// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
    znacka: 'Ford',
    barva: 'modra',
    rokVyroby: 2015,
    spz: 'AU8 2223'
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel = {};
auto.majitel.jmeno = 'Jana';
auto.majitel.prijmeni = 'Czechita';



// Přepiš značku na Škoda
auto['znacka']='Škoda';
auto.barva = "červená";

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
let majitelka = auto.majitel.jmeno + ' '+ auto.majitel.prijmeni;
let znacka = auto.znacka;
let SPZ = auto.spz;

console.log(auto);
console.log(majitelka);
console.log(znacka);
console.log(SPZ);

document.getElementById("majitelka").innerHTML = majitelka+", ";
document.getElementById("znacka").innerHTML = znacka;
document.getElementById("spz").innerHTML = SPZ;