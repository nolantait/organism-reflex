import { Controller } from "stimulus"
import { useHover, useClickOutside } from 'stimulus-use'

export default class extends Controller {
  static targets = [ "content" ]
  static classes = [ "hidden" ]
  static values = {
    mode: String,
    expanded: Boolean,
  }

  connect() {
    useClickOutside(this)

    switch(this.modeValue) {
      case 'click':
        break
      case 'hover':
        useHover(this)
        break
      default:
        break
    }
  }

  toggle(event) {
    this.expandedValue = !this.expandedValue
  }

  expandedValueChanged() {
    this.expandedValue ?
      this._expand() :
      this._collapse()
  }

  clickOutside(event) {
    this.expandedValue = false
  }

  mouseEnter() {
    this.expandedValue = true
  }

  mouseLeave() {
    this.expandedValue = false
  }

  _expand() {
    this.element.setAttribute("aria-expanded", "true")
    this.contentTarget.classList.remove(this.hiddenClass)
  }

  _collapse() {
    this.element.setAttribute("aria-expanded", "false")
    this.contentTarget.classList.add(this.hiddenClass)
  }
}
