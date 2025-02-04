// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "te siento conmigo", time: 14 },
  { text: "en cada latido", time: 17 },
  { text: "de mi corazon ♥️", time: 21 },
  { text: "si me siento perdido", time: 27 },
  { text: "encuentro el norte", time: 31 },
  { text: "con solo escuchar tu voz", time: 33 },
  { text: "podran pasar huracanes", time: 41 },
  { text: "pero nada podra contra mi", time: 47 },
  { text: "por que tuuuuuu seras", time: 55 },
  { text: "la luz que ilumine mi andar", time: 60 },
  { text: "y el mundo se detendra a mirar", time: 68 },
  { text: "UN AMOR DE VERDAD", time: 76 },
  { text: "UN AMOR DE VERDAD", time: 89 },
  { text: "si estas a mi lado", time: 97 },
  { text: "no importa el pasado", time: 100 },
  { text: "ya no hay mas dolor", time: 104 },
  { text: "OH NO", time:  109 },
  { text: "el cielo nublado", time: 110 },
  { text: "y el viento helado", time: 115 },
  { text: "se fueron con tu calor", time: 117 },
  { text: "podran volver huracanes", time: 125 },
  { text: "NO", time: 129 },
  { text: "pero noda podra contra mi", time: 130 },
  { text: "por que tuuuuuuu seras", time: 138 },
  { text: "la luz que ilumine mi andar", time: 145 },
  { text: "y el mundo se detendra a mirar", time: 153 },
  { text: "UN AMOR DE VERDAD", time: 160 },
  { text: "y es que tu seras", time: 166 },
  { text: "la luz que ilumine mi andar", time: 173 },
  { text: "y el mundo se detendra a mirar", time: 181 },
  { text: "UN AMOR DE VERDAD", time: 187 },
  { text: "UN AMOR DE VERDAD.", time: 194 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);