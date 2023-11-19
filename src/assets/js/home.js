// Correctly identify what post is selected on page load, if any
window.onload = () => {
    const fragment = window.location.hash
    // Deselect all selected posts
    document.querySelectorAll(".current-post").forEach((post) => {
        post.classList.remove("current-post")
        post.classList.add("not-current-post")
    })
    const inactiveSelectors = document.querySelectorAll(".not-current-post")
    const inactiveSelector =
        fragment && fragment !== "#home-3-post-1" && fragment.startsWith("#home-3-post-")
            ? inactiveSelectors[Number(fragment.replace("#home-3-post-", "")) - 1]
            : inactiveSelectors[0]
    inactiveSelector.classList.remove("not-current-post")
    inactiveSelector.classList.add("current-post")
}

// Change post selector colour (implemented using css) on click
document.onclick = (e) => {
    if (e.target.classList.contains("not-current-post")) {
        document.querySelectorAll(".current-post").forEach((post) => {
            post.classList.remove("current-post")
            post.classList.add("not-current-post")
        })
        e.target.classList.add("current-post")
        e.target.classList.remove("not-current-post")
    }
}

// "Animate" the stats on the home page
const initStats = {
    // Stats may need to be formatted so that we get numbers without errors

    dollars: Number(document.getElementById("home-4-stats-dollars").innerHTML.replace("$", "").replace(",", "")),
    volunteers: Number(document.getElementById("home-4-stats-volunteers").innerHTML.replace("+", "")),
    events: Number(document.getElementById("home-4-stats-events").innerHTML),
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const targetedCompletionMs = 300
        // The undefined fields need to be defined in the switch statement, else the rest of the code will break
        let target = undefined
        let increment = undefined
        let current = 0

        /*
        Timeout is the number of milliseconds between each increment, so that total increments take targetedCompletionMs.
        Calculation is timout = totalTime / speed
         */
        const timeout = () => targetedCompletionMs / (target / increment)

        switch (entry.target.id) {
            case "home-4-stats-dollars":
                target = initStats["dollars"]
                increment = 100

                entry.target.innerHTML = `$${current.toLocaleString()}`

                const incrementDollars = setInterval(() => {
                    // This ensures that we don't exceed target
                    current = Math.min(current + increment, target)
                    entry.target.innerHTML = `$${current.toLocaleString()}`

                    if (current !== target) return
                    clearInterval(incrementDollars)
                }, timeout())
                break

            case "home-4-stats-volunteers":
                target = initStats["volunteers"]
                increment = 1

                entry.target.innerHTML = `${current.toLocaleString()}+`

                const incrementVolunteers = setInterval(() => {
                    current = Math.min(current + increment, target)
                    entry.target.innerHTML = `${current.toLocaleString()}+`

                    if (current !== target) return
                    clearInterval(incrementVolunteers)
                }, timeout())
                break

            case "home-4-stats-events":
                target = initStats["events"]
                increment = 1

                entry.target.innerHTML = current.toLocaleString()

                const incrementEvents = setInterval(() => {
                    current = Math.min(current + increment, target)
                    entry.target.innerHTML = current.toLocaleString()

                    if (current !== target) return
                    clearInterval(incrementEvents)
                }, timeout())
                break
        }
    })
})

statsObserver.observe(document.getElementById("home-4-stats-dollars"))
statsObserver.observe(document.getElementById("home-4-stats-volunteers"))
statsObserver.observe(document.getElementById("home-4-stats-events"))
