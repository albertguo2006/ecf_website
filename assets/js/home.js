const stats = document.querySelectorAll(".home4-stats-amt");
const initStats = [];
stats.forEach(stat => initStats.push(stat.innerHTML));

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            if (entry.target.innerHTML.startsWith("$")) {

                let dollars = 0;
                entry.target.innerHTML = `$${dollars.toLocaleString()}`;
                let target = Number(initStats.find(stat => stat.startsWith("$")).replace("$", "").replace(",", ""));

                const incrementDollars = setInterval(() => {
                    dollars = Math.min(dollars + 50, target);
                    entry.target.innerHTML = `$${dollars.toLocaleString()}`;
                    if (dollars === target) {
                        clearInterval(incrementDollars);
                    }
                }, 3);
            } else if (entry.target.innerHTML.endsWith("+")) {

                let volunteers = 0;
                entry.target.innerHTML = `${volunteers.toLocaleString()}+`;
                let target = Number(initStats.find(stat => stat.endsWith("+")).replace("+", ""));

                const incrementVolunteers = setInterval(() => {
                    volunteers = Math.min(volunteers + 1, target);
                    entry.target.innerHTML = `${volunteers.toLocaleString()}+`;
                    if (volunteers === target) {
                        clearInterval(incrementVolunteers);
                    }
                }, 15);
            } else {

                let events = 0;
                entry.target.innerHTML = `${events.toLocaleString()}`;
                let target = Number(initStats.find(stat => !stat.endsWith("+") && !stat.startsWith("$")));

                const incrementEvents = setInterval(() => {
                    events = Math.min(events + 1, target);
                    entry.target.innerHTML = `${events.toLocaleString()}`;
                    if (events === target) {
                        clearInterval(incrementEvents);
                    }
                }, 180);
            }
        }
    })
});

stats.forEach(stat => statsObserver.observe(stat));