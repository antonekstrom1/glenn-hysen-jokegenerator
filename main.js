//Inspiration till koden har jag tagit från Mig själv, W3Schools.com och Discordgruppen.

const skämtKnappen = document.querySelector('button');
// I det här fallet söker vi efter <button> då varje klick på knappen ska generera ett nytt skämt enligt listan nedan.

const jokes = [
  'Vad hette Norges vallagubbe? Inge glid eller? GULD!! Ha d gott. Glenn.',
  'Två alkisar "-va e d vi dricker???" Men även en spelare i Sveriges J- VM lag i ishockey??? De e la Rose!! Ha d gott. Glenn.',
  'Två spelare i Nord Korea som heter kuk, det måste vara stake i dom. Ha de gott. Glenn.',
  'Vad är det som är så kladdigt i matteboken?? Pytagoras sats!! Ha d gott. Glenn.',
  'Varför blir aldrig snln liggande i Glasgow? 400 000 skottar! Ha d gott. Glenn.',
  'Jesus fick frågan, Vad gör du i påsk? Vet inte sa han, jag har inte spikat!!! Ha d gott. Glenn.',
  'Vilken är världens mest musikaliaste fågel?? Truten, för d e en Måsart!!! Ha d gott. Glenn.'
  // Här är en lista med 7st skämt. Det går bra att fylla på detta lista med fler skämt.
];


window.onload =
  function getJoke() {
    let randomNumber = (Math.floor(Math.random() * jokes.length));
    // Här skapas en variabel med värden mellan 0-6 enligt:
    // [1] Math.floor() avrundar nr till heltal
    // [2] Math.random() ger ett nr mellan 0 < 1
    // [3] jokes.length multiplicerar heltalet i (2) med antal skämt (array.length).

    console.log(randomNumber);
    // Här ser vi vilket nummer som tas fram i konsolen.

    document.getElementById('jokeText').innerHTML = jokes[randomNumber];
    // Placerar jokes[index] i HTML med id "jokeText"

    window.onload = skämtKnappen.addEventListener('click', getJoke);

  }
