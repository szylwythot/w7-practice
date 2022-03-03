// events branch
// egy form a jsből a htmlbe
// "input" event
// loggolja ki az értékét az input mezőnek

function loadEvent(){

    let rootElement = document.getElementById("root");
    let formHtml =`
    <form action="script.js">
        <label for="inputLaber">Input:</label><br>
        <input type="text" id="inputText" name="inputText" value=""><br>
        <input type="submit" value="Submit">
    </form> 
    `;

    rootElement.insertAdjacentHTML(`beforeend`, formHtml);
}

window.addEventListener("load", loadEvent);