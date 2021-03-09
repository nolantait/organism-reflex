import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "selectAll" ]
  static values = {
    selected: Array,
    type: String
  }

  select(event) {
    const id = event.target.value
    let set = new Set(this.selectedValue)

    if (set.has(id)) {
      this._delete(set, id)
    } else {
      this._add(set, id)
    }

    this._setSelectedWithSet(set)
  }

  selectAll(event) {
    const selected = this._selectedInputs()
    const unselected = this._unselectedInputs()

    if (this._is_all_checked()) {
      this._unselect(selected)
    } else {
      this._select(unselected)
    }
  }

  selectedValueChanged() {
    this._setSelected()
  }

  _select(inputs) {
    const set = new Set(this.selectedValue)
    const ids = inputs.map((el) => el.value)

    ids.forEach((id) => {
      this._add(set, id)
    })

    this._setSelectedWithSet(set)
  }

  _unselect(inputs) {
    const set = new Set(this.selectedValue)
    const ids = inputs.map((el) => el.value)

    ids.forEach((id) => {
      this._delete(set, id)
    })

    this._setSelectedWithSet(set)
  }

  _setSelected() {
    this.inputTargets.forEach((el) => {
      el.checked = this.selectedValue.includes(el.value)
    })

    if (this.hasSelectAllTarget) {
      this.selectAllTarget.checked = this._is_all_checked()
    }
  }

  _is_all_checked() {
    return this._selectedInputs().length === this.inputTargets.length
  }

  _selectedInputs() {
    return this.inputTargets.filter(el => el.checked)
  }

  _unselectedInputs() {
    return this.inputTargets.filter(el => !el.checked)
  }

  _setSelectedWithSet(set) {
    this.selectedValue = Array.from(set)
  }

  _delete(set, value) {
    set.delete(value)
  }

  _add(set, value) {
    if (this.typeValue === 'one') {
      set.clear()
    }

    set.add(value)
  }
}
