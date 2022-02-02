const kakugen = document.getElementById("kakugen");
const kakugenBtn = document.getElementById("kakugen-button");

const kakugens = [
  "弟より優れた兄など存在しない!",
  "やりたいことがあればやりましょう",
  "迷ったらやりましょう",
  "マスクをつけましょう",
  "人と会ったら挨拶しましょう",
  "よく分からなかったらとりあえず同意しておきましょう",
];

kakugenBtn.onclick = function () {
  kakugen.textContent = kakugens[Math.floor(Math.random() * kakugens.length)];
};
