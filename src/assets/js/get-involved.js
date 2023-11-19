const expandEventsButton = document.getElementById("get-involved-4__expand-past-events")
expandEventsButton.addEventListener(
    "click",
    () => {
        const hiddenPastEvents = document.getElementsByClassName("get-involved-4__past-event--hidden")
        /*
    Note that we do not use a traditional for-of loop because the length of the array changes as we remove elements.
    If we were to use a loop regardless, we would be skipping over elements.
    */
        while (hiddenPastEvents.length) {
            const e = hiddenPastEvents[0]
            e.classList.remove("get-involved-4__past-event--hidden")
        }
        expandEventsButton.classList.add("transparent-button--hidden")
    },
    false,
)
