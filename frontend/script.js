// get data
function Month(name, id, number, dayCount) {
    this.name = name;
    this.id = id;
    this.number = number;
    this. dayCount = dayCount;
}

const months = [
    new Month("January", "jan", 1, 31), 
    new Month("February", "feb", 2, 28),
    new Month("March", "mar", 3, 31),
    new Month("April", "apr", 4, 30), 
    new Month("May", "may", 5, 31), 
    new Month("Jun", "jun", 6, 30), 
    new Month("July", "jul", 7, 31), 
    new Month("August", "aug", 8, 31), 
    new Month("September", "sep", 9, 30), 
    new Month("October", "oct", 10, 31), 
    new Month("November", "nov", 11, 31), 
    new Month("December", "dec", 12, 31)
];

// prepare data - codewars- business logic

// components = html elementds we would like to add the document later
const monthSection = (id, h1, days) => {
    return `
    <section id=${id}>
    <h1>${h1}</h1>
        <div class="dayCards">${days}</div>
        </section>
    `;
};

const dayCard = (year, month, day) => {
    return `
    <div class="dayCard">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
        <button class="card-btn">Get day name</button>
    </div>
    `;
};

const dayCards = (month, callDayCard) => {
    let toReturn = "";
    for (let dayIndex = 0; dayIndex < month.dayCount; dayIndex++) {
        toReturn += callDayCard(2022, month.number, dayIndex);
    }
    return toReturn;
};
    
const loadEvent =  _ => { // NEM FOGJUK A PARAMÉTEREKET HASZNÁLNI, EZÉRT VAN () HELYETT _
    let content = "";
    const root = document.getElementById("root");
    for (const month of months) {
        content += monthSection(month.id, month.name, dayCards(month, dayCard));
    }
    root.insertAdjacentHTML(`beforeend`, content);

    // click event handling
    // function cardButtonClickEvent(event){
    //     // console.log(event.target.parentElement);
    //     event.target.parentElement.classList.toggle("clicked");
    // }

    // const cardList = document.querySelectorAll(".dayCard");
    // for (const card of cardList) {
    //     // console.log(card);
    //     card.querySelector("button").addEventListener(`click`, cardButtonClickEvent);
    // }

    function clickEvent (event){
        // console.log(event.target);
        if(event.target.classList.contains("card-btn")){
            console.log("Hello click");
            event.target.innerHTML = "This button was clicked"
        }
    }
    
    document.addEventListener("click", clickEvent);
}

window.addEventListener("load", loadEvent);