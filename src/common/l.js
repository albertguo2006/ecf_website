import * as htmlText from "bundle-text:./ecf-wrapper.html"
import * as cssText from "bundle-text:./ecf-wrapper.css"

customElements.define(
    "hello-world",
    class extends HTMLElement {
        constructor() {
            super()
        }
        connectedCallback() {
            // Create a shadow root
            // The custom element itself is the shadow host
            const shadow = this.attachShadow({ mode: "closed" })
            const div = document.createElement("div")
            const prefix = ""
            div.innerHTML = htmlText

            let style = document.createElement("style")
            style.textContent = cssText
            shadow.appendChild(style)
            shadow.appendChild(div.cloneNode(true))
        }
    },
)
