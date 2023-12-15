// We don't use the shadow DOM because we want styles to leak into the custom elements
customElements.define(
    "ecf-wrapper",
    class extends HTMLElement {
        constructor() {
            super()

            /**
             * Determines the path prefix for the page that this script is running on.
             * @param {string} pathName The path name of the page that this script is running on.
             * @returns {string} The path prefix for the page that this script is running on.
             */
            const determinePrefix = (pathName) => {
                if (pathName.startsWith("/ecf_website/src")) return "/ecf_website/src"
                if (pathName.startsWith("/ecf_website")) return "/ecf_website"
                return ""
            }

            let prefix = determinePrefix(window.location.pathname)

            let currentPath = window.location.pathname

            // Only include the first part of the path after the prefix, prefix included.
            const pathEnd = currentPath.indexOf("/", prefix !== "" ? prefix.length + 1 : 1)
            if (pathEnd !== -1) {
                currentPath = currentPath.substring(0, pathEnd + 1)
            }
            // Remove index.html
            if (currentPath.indexOf("index.html") !== -1) {
                currentPath = currentPath.substring(0, currentPath.indexOf("index.html"))
            }
            // Add trailing slash if not present
            if (currentPath.endsWith("/") === false) {
                currentPath += "/"
            }

            const navHTML = `
            <nav>
                <a href="${prefix === "" ? "/" : `${prefix}/`}">
                    <img class="nav__logo" src="${prefix}/assets/icon.ico" alt="Evergreen Collective's logo" loading="lazy">
                </a>
                <ul id="nav-list">
                    <li><a href="${prefix === "" ? "/" : `${prefix}/`}">HOME</a></li>
                    <li><a href="${prefix}/get-involved/">GET INVOLVED</a></li>
                    <li>
                        <!-- The spacing here is to make the caret down actually look good-->
                        <a id="nav-about" href="${prefix}/about-us/">ABOUT US&nbsp;&nbsp;
                            <div class="nav__about-caret"> <!-- This div exists to help limit scopes -->
                                <i class="fa-solid fa-caret-down"></i>
                                <i class="fa-solid fa-caret-up"></i>
                            </div>
                        </a>
                        <div class="nav-dropdown">
                            <div class="nav-dropdown__border">
                                <div class="nav-dropdown__content">
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
                    <li><a href="https://blog.evergreencollective.ca/" target="_blank" rel="noopener noreferrer">BLOG</a></li>
                    <li><a href="https://www.paypal.com/paypalme/ExpeditionPeng" target="_blank" rel="noopener noreferrer">DONATE</a></li>
                </ul>
            </nav>`

            const footerHTML = `
            <footer>
                <div class="footer__contact"><h1>CONTACT US</h1></div>
                <div class="footer__socials">
                    <a href="mailto:evergreencollectivefound@gmail.com"><i class="fa-regular fa-envelope fa-2xl"></i></a>
                    <a href="https://www.facebook.com/EvergreenCollectiveFound/"><i class="fa-brands fa-facebook-f fa-2xl"></i></a>
                    <a href="https://www.instagram.com/evergreencollect/"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                    <a href="https://ca.linkedin.com/company/evergreencollective"><i class="fa-brands fa-linkedin-in fa-2xl"></i></a>
                </div>
            </footer>`

            // For some reason, the class content needs to be applied to both the wrapper and the content div
            this.innerHTML = `${navHTML}<div class="content">${this.innerHTML}</div>${footerHTML}`
            this.classList.add("content")

            // Add the current indicator to the appropriate nav element
            const navList = document.getElementById("nav-list")
            // Use the innerHTML so that a user can still click the link if they click the indicator
            navList.querySelector(`a[href="${currentPath}"]`).innerHTML += '<div class="nav__current-indicator"></div>'
        }
    },
)

const toLazyLoad = document.querySelectorAll(".lazy-load")
const lazyLoaderObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // No point in doing anything if the element is hidden anyway. Shouldn't happen, but jic
        if (!entry.isIntersecting || entry.target.hidden) return
        entry.target.classList.remove("lazy-load")
        lazyLoaderObserver.unobserve(entry.target)
    })
})

toLazyLoad.forEach((element) => lazyLoaderObserver.observe(element))
