// TODO THE FOLLOWING CODE HAS NOT BEEN TESTED. TEST BEFORE USE!
const expandEventsButton = document.getElementById("expandPastEvents");
expandEventsButton.addEventListener("click", () => {

    const hiddenPastEvents = document.getElementsByClassName("hiddenPastEvent");
    hiddenPastEvents.forEach(e => {
        e.classList.remove("hiddenPastEvent");
    });
}, false);