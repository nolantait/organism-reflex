import { Controller } from "stimulus"
import { useHover, useClickOutside } from 'stimulus-use'

export default class extends Controller {
  static classes = [ "hidden" ]
  static targets = [ "expandable" ]
  static values = {
    expanded: Boolean,
    mode: String
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
    event.preventDefault()
    event.stopImmediatePropagation()

    this.expandedValue = !this.expandedValue
  }

  expandedValueChanged() {
    this.expandedValue ?
      this._expand() :
      this._collapse()
  }

  clickOutside(event) {
    event.preventDefault()
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
    this.expandableTarget.classList.remove(this.hiddenClass)
  }

  _collapse() {
    this.element.setAttribute("aria-expanded", "false")
    this.expandableTarget.classList.add(this.hiddenClass)
  }
}
