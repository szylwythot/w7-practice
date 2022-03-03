const formHtml = () => {
    return `
    <form>
    <input id="input1" name="input1" type="text" />
    <input id="input2" name="input2" type="text" />
    <input id="input3" name="input3" type="text" />
    <select name="animals" id="animals">
        <option value="both555">both</option>
        <option value="cats555">cats</option>
        <option value="dogs555">dogs</option>
    </select>
    <button>Send</button>
    </form>
    `;
};

function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root");
    
    rootElement.insertAdjacentHTML("beforeend", formHtml());
    
    const form = rootElement.querySelector("form");

    const inputList = document.querySelectorAll("input");
    console.log(typeof inputList);
    console.log(Array.isArray(inputList));
    
    (Array.from(inputList)).map((input) =>{
        input.addEventListener("input", function(event) {
            console.log(event.target.value);
        });
    });

    let select = form.querySelector("select");
    select.addEventListener(`input`, (event) => {
        console.log(event.target.value);
    })
    
    form.addEventListener(`submit`, (event) => {
        event.preventDefault();
        console.log(event.target);
        console.dir(event.target);
    });
}
window.addEventListener("load", loadEvent);