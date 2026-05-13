import * as stack from './stack.js';

window.onload = function () {
    console.log("done");

    const pop = document.getElementById('pop');
    const push = document.getElementById('push');
    const peek = document.getElementById('peek');
    const display = document.getElementById('top_of_stack');

    // Funktion för att uppdatera visningen av stackens topp
    function update() {
        const top = stack.peek();
        //display.innerHTML = top !== undefined ? top : "n/a";
    }

    // POP – ta bort översta elementet
    pop.addEventListener("click", function () {
        const removed = stack.pop();
        alert("Tog bort " + removed);
        update();   // ⭐ Viktigt för Selenium-testet
    });

    // PUSH – lägg till nytt element
    push.addEventListener("click", function () {
        const x = prompt("Vad ska vi lägga på stacken?");
        stack.push(x);
        update();
    });

    // PEEK – visa översta elementet
    peek.addEventListener("click", function () {
        update();
    });

    // Uppdatera visningen vid start
    update();
};
