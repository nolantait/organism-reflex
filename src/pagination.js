import { Controller } from "stimulus"

export default class extends Controller {
  static classes = [ "hidden" ]
  static targets = [ "windows" ]
  static values = {
    windowPosition: Number,
  }

  connect() {
    this._hideWindows()
  }

  windowPositionValueChanged() {
    this._hideWindows()
  }

  next(event) {
    this.windowPositionValue += 1
  }

  previous(event) {
    this.windowPositionValue -= 1
  }

  _hideWindows() {
    this.windowsTargets.forEach((el) => {
      const elPosition = parseInt(el.dataset.position)

      if (elPosition === this.windowPositionValue) {
        el.classList.remove(this.hiddenClass)
      } else {
        el.classList.add(this.hiddenClass)
      }
    })
  }
}
