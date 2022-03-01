// get data
function Month(name, id, number, dayCount) {
    this.name = name;
    this.id = id;
    this.number = number;
    this. dayCount = dayCount;
}

let months = [
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

console.log(months);

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

console.log(dayCards(months[0], dayCard));

