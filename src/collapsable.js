import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "content", "icon" ]
  static classes = [ "hidden", "collapsed" ]
  static values = {
    collapsed: Boolean,
  }

  connect() {
    this._handleCollapsedState()
  }

  toggle() {
    this.collapsedValue = !this.collapsedValue
  }

  collapsedValueChanged() {
    this._handleCollapsedState()
  }

  _handleCollapsedState() {
    if (this.collapsedValue) {
      this._collapse()
    } else {
      this._expand()
    }
  }

  _collapse() {
    this.contentTarget.classList.add(this.hiddenClass)
    this.iconTarget.classList.add(this.collapsedClass)
  }

  _expand() {
    this.contentTarget.classList.remove(this.hiddenClass)
    this.iconTarget.classList.remove(this.collapsedClass)
  }
}
