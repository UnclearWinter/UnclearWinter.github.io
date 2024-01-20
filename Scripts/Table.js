const GameGridTemplate = document.getElementById("game-template");

fetch("https://unclearwinter.github.io/gameslist/db").then(res => res.json()).then(data => {
    const card = GameGridTemplate.content.cloneNode(true);
    console.log(card);
}
)