function Country(name, short, population, flag, continent){
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

// menubutton
const menuButton = () => {
    return `
    <button id="menuButton">
        <svg width="40" height="40">
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg>
        <span>button</span>
    </button>
    `;
};

// Components
const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>`;
};

// section 
const section = (id, h1, countries) => {
    return `
    <section id=${id}>
        <h1>${h1}</h1>
        <div class="countryCards">${countries}</div>
    </section>
    `;
};

// countrycards
// const countryCard = (name, short, population, flag, continent) => {
//     return `
//     <div class="countryCard">
//         <h2>${name}</h2>
//         <p>${short}</p>
//         <p>${population}</p>
//         <img src=${flag}/>
//         <p>${continent}</p>
//     </div>
//     `;
// };
const countryCard = (country) => {
    return `
    <div class="countryCard">
        <h2>${country.name}</h2>
        <p>${country.short}</p>
        <p>${country.population}</p>
        <img src="${country.flag}"/>
        <p>${country.continent}</p>
    </div>
    `;
};


// countrycard
const countryCards = (countries, callcountryCard) => {
    let toReturn = "";
    for (const country of countries) { //mappel is működik, és utána join
        toReturn += callcountryCard(country);
    }
    return toReturn;
};

const loadEvent = async  _ => { 
    // get data
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    console.log(countryArr[0].flags.svg);

    // process data
    let countries = countryArr.map(function (country){
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0]);
    });

    console.log(countries);

    const root = document.getElementById("root");
    root.insertAdjacentHTML(`beforeend`, `
    ${header("Countries", menuButton)}
    ${section("countrySection", "Countries of the world", countryCards(countries, countryCard))}
    `);

    const gotMenuButton = document.getElementById("menuButton");
    gotMenuButton.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked");
    });

    // fel: beúszó menü
    // gyűjtsük ki az összes continentet és filterezzük a duplikációkat, és rendereljük ki a benyíló menübe a kontinenseket
}

window.addEventListener("load", loadEvent);