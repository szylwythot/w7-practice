const form = () => {
    return `
    <form>
        <input id="input1" name="input1" type="text" />
        <input id="input2" name="input2" type="text" />
        <input id="input3" name="input3" type="text" />
        <button>Send</button>
    </form>
    `;
};

function loadEvent() {
    console.log("load");
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", form());

    const inputList = document.querySelectorAll("input");
    console.log(typeof inputList);
    console.log(Array.isArray(inputList));

    (Array.from(inputList)).map((input) =>{
        input.addEventListener("input", function(e) {
            console.log(e.target.value);
        });
    });
}
window.addEventListener("load", loadEvent);