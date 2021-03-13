import { Controller } from "stimulus"

export default class extends Controller {
  static classes = [ "hidden" ]

  toggle(event) {
    this.element.classList.add(this.hiddenClass)
  }
}
