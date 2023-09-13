let emojis = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let buttonEl = document.getElementById("startFight");

startFight.addEventListener("click", function () {
  let randomEmojiOne = Math.floor(Math.random() * emojis.length);
  let randomEmojiTwo = Math.floor(Math.random() * emojis.length);
  stageEl.textContent =
    emojis[randomEmojiOne] + " Vs " + emojis[randomEmojiTwo];
});

// function start() {
//   let randomEmojiOne = Math.floor(Math.random() * emojis.length);
//   let randomEmojiTwo = Math.floor(Math.random() * emojis.length);
//   stageEl.textContent =
//     emojis[randomEmojiOne] + " Vs " + emojis[randomEmojiTwo];
// }
