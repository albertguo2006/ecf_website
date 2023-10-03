// We don't use the shadow DOM because we want styles to leak into the custom elements

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
            if (this.current.indexOf("/ecf_website") === 0) {
                this.current = this.current.substring("/ecf_website".length);
            }
            // Only use the first part of the path
            if (this.current.indexOf("/", 1) !== -1) {
                this.current = this.current.substring(0, this.current.indexOf("/", 1) + 1);
            }
            // Remove index.html
            if (this.current.indexOf("index.html") !== -1) {
                this.current = this.current.substring(0, this.current.indexOf("index.html"));
            }
            // Remove the trailing slash
            if (this.current !== "/" && this.current.charAt(this.current.length - 1) === "/") {
                this.current = this.current.substring(0, this.current.length - 1);
            }
        }
    }

    // This is used, unlike what the IDE might claim
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a class="logo" href="/"><img src="/assets/icon.ico" alt="Evergreen Collective's logo"></a>
             <ul id="nav-list">
                <li class="nav-home-border"><a href="/">HOME</a></li>
                <li><a href="/get-involved">GET INVOLVED</a></li>
                <li>
                    <!-- The spacing here is to make the caret down actually look good-->
                    <a id="nav-about" href="/about-us">ABOUT US&nbsp;&nbsp;
                        <i class="fa-solid fa-caret-down"></i>
                        <i class="fa-solid fa-caret-up"></i>
                    </a>
                    <div class="nav-dropdown">
                        <div class="nav-dropdown-border">
                            <div class="nav-dropdown-content">
                                <a href="/about-us/Canada/AB">AB - Canada</a>
                                <a href="/about-us/Canada/BC">BC - Canada</a>
                                <a href="/about-us/Canada/ON">ON - Canada</a>
                                <a href="/about-us/Canada/SK">SK - Canada</a>
                                <a href="/about-us/Turkey">Turkey</a>
                                <a href="/about-us/USA/CA">CA - USA</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="https://blog.evergreencollective.ca">BLOG</a></li>
                <li class="nav-donate-border"><a class="nav-donate" href="/donate">DONATE</a></li>
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
        <footer id="ecf-footer" class="footer">
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
        this.setAttribute("class", "wrapper");
        this.innerHTML = `
        <ecf-nav></ecf-nav>
        <div class="content">${this.innerHTML}</div>
        <ecf-footer></ecf-footer>`;
    }
});