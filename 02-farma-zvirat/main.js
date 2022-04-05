const zvirata = [
    {jmeno: 'Kravička', foto: 'obrazky/krava.jpg'},
    {jmeno: "Husička", foto:"obrazky/husa.jpg"},
    {jmeno: "Kočička", foto:"obrazky/kocka.jpg"},
    {jmeno: "Koníček", foto:"obrazky/kun.jpg"},
    {jmeno: "Ovečka", foto:"obrazky/ovce.jpg"},
    {jmeno: "Pejsek", foto:"obrazky/pes.jpg"},
];
/* const poleZvirat = [
    {jmeno: 'Husa', foto: 'obrazky/husa.jpg'},
    {jmeno: 'Kocka', foto: 'obrazky/kocka.jpg'},
    {jmeno: 'Kun', foto: 'obrazky/kun.jpg'},
    {jmeno: 'Ovce', foto: 'obrazky/Ovce.jpg'},
    {jmeno: 'Pes', foto: 'obrazky/pes.jpg'}
]; */

let zvire = document.createElement('div');
zvire.className = 'zvire';

let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto';

let jmenoZvirete = document.createElement('span');
jmenoZvirete.className = 'jmeno';


let farma = document.querySelector('.farma');
farma.appendChild(zvire);


for (let i=0; i< zvirata.length; i++) {
    const zvire = document.createElement("div");
    zvire.classList.add("zvire");

    const fotoZvirete = document.createElement("img");
    fotoZvirete.classList.add('foto');
    fotoZvirete.src = zvirata[i].foto;
    fotoZvirete.alt = zvirata[i].jmeno;

    const jmenoZvirete = document.createElement('div');
    jmenoZvirete.classList.add('jmeno');
    jmenoZvirete.textContent = zvirata[i].jmeno;

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    farma.appendChild(zvire);
}


console.log(zvirata);