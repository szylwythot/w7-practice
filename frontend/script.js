// events branch
// egy form a jsből a htmlbe
// "input" event
// loggolja ki az értékét az input mezőnek

function loadEvent(){

    let rootElement = document.getElementById("root");
    let formHtml =`
    <form action="">
        <label for="inputLaber">Input:</label><br>
        <input type="text" id="inputText" name="inputText" value=""><br>
        <!-- <input type="submit" value="Submit"> -->
        <input type="submit" value="Submit">
    </form>
    `;

    rootElement.insertAdjacentHTML(`beforeend`, formHtml);

    const input = document.getElementById('inputText');
    input.addEventListener('input', updateValue);

    function updateValue(e) {
        console.log(e.target.value);
    }
}

window.addEventListener("load", loadEvent);