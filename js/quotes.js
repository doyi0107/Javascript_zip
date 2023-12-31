const quotes = [
  {
    quote:
      "가장 빠르고, 가장 똑똑하고, 가장 총명하고, 가장 부유한 사람에게 큰 승리는 오지 않는다. 큰 승리는 넘어질 때마다 일어나는 사람에게 오는 것이다",
    author: "-헨리에트 앤 클라우저-",
  },
  {
    quote: "침묵은 자신을 신용할 수 없는 자에게 가장 안전한 재치다.",
    author: "-프랑수아 라로슈푸코-",
  },
  {
    quote:
      "길을 가다가 돌이 나타나면, 약자는 그것을 걸림돌이라고 말하고 강자는 그것을 디딤돌이라고 말한다.",
    author: "-토머스 칼라일-",
  },
  {
    quote: "걱정 없는 인생을 바라지 말고, 걱정에 물들지 않는 연습을 하라.",
    author: "-알랭-",
  },
  {
    quote:
      "비관론자는 대체로 옳고, 낙관론자는 대체로 그르다. 그러나 대부분의 위대한 변화는 낙관로자가 이룬다.",
    author: "-토마스 프리드만-",
  },
  {
    quote:
      "사람들 중 가장 쓸모 있는 이는 사람들에게서 멀리 떨어져 있는 자이다.",
    author: "-칼릴 지브란-",
  },
  {
    quote: "남을 판단하는 것보다 자신을 판단하는게 훨씬 어렵다.",
    author: "-앙투안 드 생텍쥐페리-",
  },
  {
    quote: "인간의 지혜는 단 두 단어 '기다림'과 '희망'으로 집약된다.",
    author: "-알렉상드르 뒤마-",
  },
  {
    quote:
      "돈이 있어야 돈이 인생에서 지나치게 큰 비중을 차지하지 않도록 할 수 있다. 돈맹에게는 미래가 없다",
    author: "-보도 섀퍼의 돈-",
  },
  {
    quote: "꿈을 품어라. 꿈이 없는 사람은 아무런 생명력도 없는 인형과 같다.",
    author: "-발타자르 그라시안-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const changeQuoteBtn = document.getElementById("change_quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  quote.innerText = randomQuote.quote;
  author.innerText = randomQuote.author;
}

// 초기화면 설정
displayRandomQuote();

// 버튼 클릭 시 이벤트 처리
changeQuoteBtn.addEventListener("click", displayRandomQuote);
