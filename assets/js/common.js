// We don't use the shadow DOM because we want styles to leak into the custom elements

let prefix = "";
customElements.define("ecf-nav", class extends HTMLElement {

    // Just define the variable here so that the IDE doesn't complain
    current = "";

    constructor() {
        super();
        this.current = window.location.pathname;

        if (this.current === "") {
            this.current = "/";
        } else {
            // Remove the name of the project name in dev environments
            if (this.current.startsWith("/ecf_website")) {
                prefix = "/ecf_website";
            }
            // Only include the first part of the path after the prefix, prefix included.
            const pathEnd = this.current.indexOf("/", prefix !== "" ? prefix.length + 1 : 1);
            if (pathEnd !== -1) {
                this.current = this.current.substring(0, pathEnd + 1);
            }
            // Remove index.html
            if (this.current.indexOf("index.html") !== -1) {
                this.current = this.current.substring(0, this.current.indexOf("index.html"));
            }
            // Add trailing slash if not present
            if (this.current.endsWith("/") === false) {
                this.current += "/";
            }
        }
    }

    // This is used, unlike what the IDE might claim
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a class="logo" href=${prefix === "" ? "/" : `${prefix}/`}>
                <img src="${prefix}/assets/icon.ico" alt="Evergreen Collective's logo" loading="lazy">
            </a>
            <ul id="nav-list">
                <li class="nav-home-border"><a href=${prefix === "" ? "/" : `${prefix}/`}>HOME</a></li>
                <li><a href="${prefix}/get-involved/">GET INVOLVED</a></li>
                <li>
                    <!-- The spacing here is to make the caret down actually look good-->
                    <a id="nav-about" href="${prefix}/about-us/">ABOUT US&nbsp;&nbsp;
                        <div class="nav-about-caret">
                            <i class="fa-solid fa-caret-down"></i>
                            <i class="fa-solid fa-caret-up"></i>
                        </div>
                    </a>
                    <div class="nav-dropdown">
                        <div class="nav-dropdown-border">
                            <div class="nav-dropdown-content">
                                <a href="${prefix}/about-us/Canada/AB/">AB - Canada</a>
                                <a href="${prefix}/about-us/Canada/BC/">BC - Canada</a>
                                <a href="${prefix}/about-us/Canada/ON/">ON - Canada</a>
                                <a href="${prefix}/about-us/Canada/SK/">SK - Canada</a>
                                <a href="${prefix}/about-us/Turkey/">Turkey</a>
                                <a href="${prefix}/about-us/USA/CA/">CA - USA</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="https://blog.evergreencollective.ca/">BLOG</a></li>
                <li class="nav-donate-border"><a class="nav-donate" href="${prefix}/donate/">DONATE</a></li>
            </ul>
        </nav>`;

        const navList = document.getElementById("nav-list");
        navList.querySelector(`a[href="${this.current}"]`).classList.add("nav-current");
    }
});

customElements.define("ecf-footer", class extends HTMLElement {

    constructor() {
        super();
    }

    // This is used, unlike what the IDE might claim
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="contact">
                <h1>CONTACT US</h1>
            </div>
            <div class="socials">
                <a href="mailto:evergreencollectivefound@gmail.com"><i
                    class="fa-regular fa-envelope fa-2xl"></i></a>
                <a href="https://www.facebook.com/EvergreenCollectiveFound/"><i
                    class="fa-brands fa-facebook-f fa-2xl"></i></a>
                <a href="https://www.instagram.com/evergreencollect/"><i
                    class="fa-brands fa-instagram fa-2xl"></i></a>
                <a href="https://ca.linkedin.com/company/evergreencollective"><i
                    class="fa-brands fa-linkedin-in fa-2xl"></i></a>
            </div>
        </footer>`;
    }
});

customElements.define("ecf-wrapper", class extends HTMLElement {
    constructor() {
        super();
    }

    // This is used, unlike what the IDE might claim
    connectedCallback() {
        this.innerHTML = `
        <ecf-nav></ecf-nav>
        <div class="content">${this.innerHTML}</div>
        <ecf-footer></ecf-footer>`;
    }
});

const toLazyLoad = document.querySelectorAll(".lazy-load");
const lazyLoaderObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // No point in doing anything if the element is hidden anyway. Shouldn't happen, but jic
        if (!entry.isIntersecting || entry.target.hidden) return;
        entry.target.classList.remove("lazy-load");
        lazyLoaderObserver.unobserve(entry.target);
    })
});

toLazyLoad.forEach(element => lazyLoaderObserver.observe(element));