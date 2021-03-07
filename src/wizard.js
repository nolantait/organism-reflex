import { Controller } from "stimulus"

export default class extends Controller {
  static classes = [ "hidden", "currentStep" ]
  static targets = [ "step", "content", "next", "previous", "finish"]
  static values = {
    stepPosition: Number,
  }

  connect() {
    this._onChange()
  }

  stepPositionValueChanged() {
    this._onChange()
  }

  next() {
    this.stepPositionValue += 1
  }

  previous() {
    this.stepPositionValue -= 1
  }

  _onChange() {
    this._showCurrentContent()
    this._toggleControls()
    this._toggleCurrentStep()
  }

  _toggleCurrentStep() {
    this.stepTargets.forEach((el) => {
      if (this.position(el) === this.stepPositionValue) {
        el.classList.add(this.currentStepClass)
      } else {
        el.classList.remove(this.currentStepClass)
      }
    })
  }

  _toggleControls() {
    if (this._is_last_step()) {
      this.nextTarget.classList.add(this.hiddenClass)
      this.finishTarget.classList.remove(this.hiddenClass)
    } else {
      this.finishTarget.classList.add(this.hiddenClass)
      this.nextTarget.classList.remove(this.hiddenClass)
    }

    if (this._is_past_steps()) {
      this.previousTarget.classList.remove(this.hiddenClass)
    } else {
      this.previousTarget.classList.add(this.hiddenClass)
    }
  }

  _is_past_steps() {
    return this.stepPositionValue > 1
  }

  _is_last_step() {
    return this.stepPositionValue === this.contentTargets.length
  }

  _showCurrentContent(targets) {
    this.contentTargets.forEach((el) => {
      if (this.position(el) === this.stepPositionValue) {
        el.classList.remove(this.hiddenClass)
      } else {
        el.classList.add(this.hiddenClass)
      }
    })
  }

  _position(el) {
    return parseInt(el.dataset.position)
  }
}
