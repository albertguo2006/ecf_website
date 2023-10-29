// TODO THE FOLLOWING CODE HAS NOT BEEN TESTED. TEST BEFORE USE!
const expandEventsButton = document.getElementById("expandPastEvents");
expandEventsButton.addEventListener("click", () => {
    const hiddenPastEvents = document.getElementsByClassName("hiddenPastEvent");
    /*
    Note that we do not use a traditional for-of loop because the length of the array changes as we remove elements.
    If we were to use an iterator regardless, we would be skipping over elements.
    */
    while (hiddenPastEvents.length) {
        const e = hiddenPastEvents[0];
        e.classList.remove("hiddenPastEvent");
    }
    expandEventsButton.classList.add("hidden");
}, false);