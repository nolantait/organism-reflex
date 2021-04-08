import Rails from '@rails/ujs'
import Sortable from 'sortablejs'
import { Controller } from "stimulus"

export default class extends Controller {
  static classes = [ 'handle' ]
  static values = {
    inputName: String,
    updateUrl: String,
  }

  initialize() {
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  connect() {
    this.sortable = new Sortable(this.element, {
      ...this.options
    })
  }

  disconnect() {
    this.sortable.destroy()
    this.sortable = undefined
  }

  onDragEnd({ item, newIndex }) {
    const data = new FormData()
    data.append(this.inputNameValue, this.sortable.toArray())

    Rails.ajax({
      url: this.updateUrlValue,
      type: 'PATCH',
      data
    })
  }

  get options() {
    return {
      animation: 150,
      handle: `.${this.handleClass}`,
      onEnd: this.onDragEnd
    }
  }
}
