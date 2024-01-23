customElements.define(
    "member-cards",
    class MemberCardWrapper extends HTMLElement {
        constructor() {
            super()
        }

        connectedCallback() {
            this.innerHTML = `<div class="member-cards">${this.innerHTML}</div>`
        }
    },
)

customElements.define(
    "member-card",
    class MemberCard extends HTMLElement {
        constructor() {
            super()
        }

        connectedCallback() {
            const name = () => {
                const splitName = this.getAttribute("name").trim().split(" ")
                let fullName = ""
                for (let i = 0; i < splitName.length; i++) {
                    fullName += splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1) + " "
                }
                return fullName
            }
            const position = () => {
                return (
                    this.getAttribute("position").trimStart().charAt(0).toUpperCase() +
                    this.getAttribute("position").trim().slice(1)
                )
            }

            const intro = () => {
                return (
                    this.getAttribute("intro").trimStart().charAt(0).toUpperCase() +
                    this.getAttribute("intro").trim().slice(1)
                )
            }

            const firstName = name().split(" ")[0]
            this.innerHTML = `
            <div class="member-card">
                <img src="./portraits/${firstName.toLowerCase()}.webp" alt="Photo of ${name()}" loading="lazy" />
                <div class="member-card__overlay">
                    <div class="member-card__name">
                        <h3>${name().toUpperCase()}</h3>
                        <h4>${position()}</h4>
                    </div>
                    <div class="member-card__introduction">
                        <div class="white-bar white-bar--thin"></div>
                        <h4>${intro()}</h4>
                    </div>
                </div>
            </div>`
        }
    },
)
