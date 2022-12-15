let content = document.querySelector(".content");
let author = document.querySelector(".author");

const data = [{ text: '"salam salam khale bozghale"', author: "khale Buz Ghale" }
    , { text: `errorrrrr`, author: "JS" }
    , { text: '"mamaus is mamaus"', author: "Me" }
    , { text: '"no pain No gain !!"', author: "hardWorkers" }
];

function randomQuote() {
    let newQuote = data[Math.floor(Math.random() * data.length)];
    while (newQuote.text == content.innerHTML && author.innerHTML == newQuote.author) {
        newQuote = data[Math.floor(Math.random() * data.length)];
    }

    content.innerHTML = newQuote.text;
    author.innerHTML = newQuote.author;
};

randomQuote();