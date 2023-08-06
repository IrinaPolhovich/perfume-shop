const perfumes = [{
        title: "Si Passione by GIORGIO ARMANI",
        description: "Sì Passione — новый аромат от Giorgio Armani, раскрывающий грани образа Sì: это аромат для женщины независимой, очень женственной и свободной.",
        tags: ["женский"],
        price: 332,
        volume: 30,
        img: "./img/1.jpg",
        rating: 4.9,
    },
    {
        title: "TOY 2 by MOSCHINO",
        description: "Новый женский аромат от Moschino. Жизнерадостный, нежный, игривый, чувственный.",
        tags: ["женский"],
        price: 167,
        volume: 30,
        img: "./img/2.jpg",
        rating: 4.6,
    },
    {
        title: "CK One by CALVIN KLEIN",
        description: "Невероятно яркий и свежий аромат для тех, кто хочет еще ближе друг другу. CK One покоряет своей богатой, многогранной композицией.",
        tags: ["женский", "мужской"],
        price: 146,
        volume: 50,
        img: "./img/3.jpg",
        rating: 5.0,
    },
    {
        title: "Man Wood Essence by BVLGARI»",
        description: "Это воспевание современной мужественности мужчин, которые глубоко связаны с природой.",
        tags: ["мужской"],
        price: 340,
        volume: 60,
        img: "./img/4.jpg",
        rating: 4.7,
    },
    {
        title: "Libre by YVES SAINT LAURENT",
        description: "Манифест свободы. Сексуальный, свежий, цветочный. Аромат, находящийся на грани между прохладой и обжигающей чувственностью.",
        tags: ["женский"],
        price: 332,
        volume: 30,
        img: "./img/5.jpg",
        rating: 4.5,
    },
    {
        title: "Lost Cherry by TOM FORD",
        description: "Сладость. Соблазн. Неутолимое желание. Lost Cherry — насыщенный аромат, открывающий двери в некогда запретный мир.",
        tags: ["женский", "мужской"],
        price: 1275,
        volume: 50,
        img: "./img/6.jpg",
        rating: 4.2,
    },
    {
        title: "Black Seduction by ANTONIO BANDERAS",
        description: "Восточные акценты амбры смешаны с тёплыми, древесными аккордами в ароматном и пикантном звучании, которые дополняются свежими и чувственными нотами.",
        tags: ["мужской"],
        price: 92,
        volume: 200,
        img: "./img/7.jpg",
        rating: 3.4,
    },
    {
        title: "K by DOLCE&GABBANA",
        description: "Сицилийский лимон, инжир, древесина виргинского кедра: решительные ноты для аромата с неповторимой харизмой.",
        tags: ["мужской"],
        price: 445,
        volume: 100,
        img: "./img/8.jpg",
        rating: 4.4,
    },
    {
        title: "Young by EISENBERG",
        description: "Древесно-амбровый аромат. Вечная освежающая яркость.",
        tags: ["женский", "мужской"],
        price: 331,
        volume: 50,
        img: "./img/9.jpg",
        rating: 4.8,
    },
    {
        title: "My Way by GIORGIO ARMANI",
        description: "Пирамидка композиции Armani My Way Верхние нотки: апельсиновый цвет из Египта, бергамот. Сердечные тона: жасмин auriculatum, тубероза.",
        tags: ["женский"],
        price: 324,
        volume: 50,
        img: "./img/10.jpg",
        rating: 5.0,
    },
    {
        title: "Toy Boy by MOSCHINO",
        description: "Аромат отражает энергию и силу активного, увлеченного и страстного мужчины, который не боится раскрыть свою нежную и чувственную сторону.",
        tags: ["мужской"],
        price: 319,
        volume: 100,
        img: "./img/11.jpg",
        rating: 3.9,
    },
    {
        title: "Fantastic Basilic by MONTALE",
        description: "Fantastic Basilic открывается терпким взрывом свежесрезанных листьев базилика. Сладкие, сочные ноты кумквата и груши смешиваются с цветком франжипани и туберозой, создавая завораживающую и экзотическую привлекательность.",
        tags: ["женский", "мужской"],
        price: 283,
        volume: 50,
        img: "./img/12.jpg",
        rating: 4.1,
    },
];

const perfumesContainer = document.querySelector("#shop-items");
const perfumeTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");

function preparePerfumeCard(perfumeItem) {
    const { title, description, tags, price, volume, img, rating } = perfumeItem;
    const item = perfumeTemplate.content.cloneNode(true);
    item.querySelector("h1").textContent = title;
    item.querySelector(".description").textContent = description;
    item.querySelector(".volume").textContent = `${volume} мл`;
    item.querySelector("img").src = img;
    item.querySelector(".price").textContent = `${price} бел.руб.`;
    const ratingContainer = item.querySelector(".rating");
    for (let i = 1; i <= rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa", "fa-star");
        ratingContainer.append(star);
    }
    const tagsHolder = item.querySelector(".tags");
    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        element.classList.add("tag");
        tagsHolder.append(element);
    });
    return item;
}

let copy = [...perfumes];

function renderItems(arr) {
    nothingFound.textContent = "";
    perfumesContainer.innerHTML = "";
    arr.forEach((perfumeItem) => {
        perfumesContainer.append(preparePerfumeCard(perfumeItem));
    });
    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

function sortByAlphabet(a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}

renderItems(copy.sort((a, b) => sortByAlphabet(a, b)));

const sorted = document.querySelector("#sort");
sorted.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive":
            {
                copy.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            {
                copy.sort((a, b) => a.price - b.price);
                break;
            }
        case "rating":
            {
                copy.sort((a, b) => b.rating - a.rating);
                break;
            }
        case "volume":
            {
                copy.sort((a, b) => b.volume - a.volume);
                break;
            }
        case "alphabet":
            {
                copy.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }
    renderItems(copy);
});

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function searchForCard() {
    const searchString = searchInput.value.trim().toLowerCase();
    copy = perfumes.filter((el) =>
        el.title.toLowerCase().includes(searchString)
    );
    copy.sort((a, b) => sortByAlphabet(a, b));
    renderItems(copy);
    sortControl.selectedIndex = 0;
}

searchButton.addEventListener("click", searchForCard);
searchInput.addEventListener("search", searchForCard);