import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.addEventListener("turbo:submit-end", (event) => {
      if (event.detail.success) {
        alert("Thank you! We will call you soon!")
      } else {
        alert("Sorry! Something went wrong.")
      }
    })
  }
}