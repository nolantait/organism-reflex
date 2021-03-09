import { Controller } from "stimulus"

export default class extends Controller {
  static classes = [ "hidden" ]

  toggle(event) {
    this.target.classList.add(this.hiddenClass)
  }
}
