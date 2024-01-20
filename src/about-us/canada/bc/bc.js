customElements.define(
    "member-card",
    class MemberCard extends HTMLElement {
        constructor() {
            super()
        }

        connectedCallback() {
            const name = () => {
                const splitName = this.getAttribute("name").split(" ")
                let fullName = ""
                for (let i = 0; i < splitName.length; i++) {
                    fullName += splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1) + " "
                }
                return fullName
            }
            const position = () => {
                return this.getAttribute("position").charAt(0).toUpperCase() + this.getAttribute("position").slice(1)
            }
            // Don't edit intro under the assumption that it may be stylized
            const intro = this.getAttribute("intro") || " "

            const firstName = name().split(" ")[0]
            this.innerHTML = `
            <div class="bc-2__member">
                <img src="./portraits/${firstName.toLowerCase()}.webp" alt="Photo of ${name()}" loading="lazy" />
                <div class="bc-2__overlay">
                    <div class="bc-2__name">
                        <h3>${name().toUpperCase()}</h3>
                        <h4>${position()}</h4>
                    </div>
                    <div class="bc-2__introduction">
                        <div class="white-bar white-bar--thin"></div>
                        <h4>${intro}</h4>
                    </div>
                </div>
            </div>`
        }
    },
)
