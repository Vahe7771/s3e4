let numeri = Array.from({ length: 90 }, (_, i) => i + 1);
let numeriEstratti = [];
const tombolone = document.getElementById("estrazione");
for (let i = 0; i < 90; i++) {
    const numberDiv =document.createElement("div");
    numberDiv.classList.add("number");
    numberDiv.innerText = i + 1;
    tombolone.appendChild(numberDiv);
}
document.getElementById("estraiButton").addEventListener("click", function () {
  if (numeri.length === 0) {
    document.getElementById("estrazione").innerText =
      "Tutti i numeri sono stati estratti!";
    return;
  }
  const indiceCasuale = Math.floor(Math.random() * numeri.length);
  const numeroEstratto = numeri[indiceCasuale];

  // Rimuovi il numero estratto dall'array dei numeri
  numeri.splice(indiceCasuale, 1);
  numeriEstratti.push(numeroEstratto);

  document.getElementById("estrazione").innerText =
    "Numero Estratto: " + numeroEstratto;
  document.getElementById("numeriEstratti").innerText =
    "Numeri Estratti: " + numeriEstratti.join(", ");
});

function estraiNumero(max, numberiEstratti) {
    let numero;
    do {
        numero = Math.floor(Math.random() * max) + 1;
    } while (numberiEstratti.includes(numero));

    numberiEstratti.push(numero); // Aggiungi il numero estratto all'array
    return numero;
}
