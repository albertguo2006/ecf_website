// Change post selector colour (implemented using css) on click
let currentPost = document.querySelector(".current-post");

document.onclick = e => {
    if (e.target.classList.contains("not-current-post")) {
        currentPost.classList.remove("current-post");
        currentPost.classList.add("not-current-post");
        currentPost = e.target;
        e.target.classList.add("current-post");
        e.target.classList.remove("not-current-post");
    }
}

// "Animate" the stats on the home page
const stats = document.querySelectorAll(".home4-stats-amt");
const initStats = [];
stats.forEach(stat => initStats.push(stat.innerHTML));

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetedCompletionMs = 300;

            if (entry.target.innerHTML.startsWith("$")) {
                const increment = 100;

                let dollars = 0;
                entry.target.innerHTML = `$${dollars.toLocaleString()}`;
                let target = Number(initStats.find(stat => stat.startsWith("$")).replace("$", "").replace(",", ""));

                const incrementDollars = setInterval(() => {
                    dollars = Math.min(dollars + increment, target);
                    entry.target.innerHTML = `$${dollars.toLocaleString()}`;

                    if (dollars === target) {
                        clearInterval(incrementDollars);
                    }
                    // Timeout is the number of milliseconds between each increment, so that total increments take targetedCompletionMs
                }, targetedCompletionMs / (target / increment));
            } else if (entry.target.innerHTML.endsWith("+")) {
                const increment = 1;

                let volunteers = 0;
                entry.target.innerHTML = `${volunteers.toLocaleString()}+`;
                let target = Number(initStats.find(stat => stat.endsWith("+")).replace("+", ""));

                const incrementVolunteers = setInterval(() => {
                    volunteers = Math.min(volunteers + increment, target);
                    entry.target.innerHTML = `${volunteers.toLocaleString()}+`;
                    if (volunteers === target) {
                        clearInterval(incrementVolunteers);
                    }
                }, targetedCompletionMs / (target / increment));
            } else {
                const increment = 1;

                let events = 0;
                entry.target.innerHTML = `${events.toLocaleString()}`;
                let target = Number(initStats.find(stat => !stat.endsWith("+") && !stat.startsWith("$")));

                const incrementEvents = setInterval(() => {
                    events = Math.min(events + increment, target);
                    entry.target.innerHTML = `${events.toLocaleString()}`;
                    if (events === target) {
                        clearInterval(incrementEvents);
                    }
                }, targetedCompletionMs / (target / increment));
            }
        }
    })
});

stats.forEach(stat => statsObserver.observe(stat));