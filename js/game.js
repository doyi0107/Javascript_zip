const symbols = ["🍎", "🍌", "🍒", "🍇", "🍓", "🍊", "🍉", "🍍"];
const cards = [...symbols, ...symbols];

let shuffledCards = [];
let flippedCards = [];
let matchedPairs = 0;
let canFlip = true;

const gameContainer = document.getElementById("game-container");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(symbol, index) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.dataset.index = index;
  cardElement.addEventListener("click", handleCardClick);
  gameContainer.appendChild(cardElement);
}

function handleCardClick() {
  if (!canFlip) return;

  const clickedCard = this;
  const index = clickedCard.dataset.index;

  if (flippedCards.length < 2 && !flippedCards.includes(index)) {
    flippedCards.push(index);
    clickedCard.textContent = cards[index];

    if (flippedCards.length === 2) {
      canFlip = false;
      setTimeout(checkForMatch, 1000);
    }
  }
}

function checkForMatch() {
  const [index1, index2] = flippedCards;
  const card1 = document.querySelector(`.card[data-index="${index1}"]`);
  const card2 = document.querySelector(`.card[data-index="${index2}"]`);

  if (cards[index1] === cards[index2]) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedPairs++;

    if (matchedPairs === symbols.length) {
      alert("게임 클리어!");
    }
  } else {
    card1.textContent = "";
    card2.textContent = "";
  }

  flippedCards = [];
  canFlip = true;
}

shuffleArray(cards);

cards.forEach((symbol, index) => createCard(symbol, index));
