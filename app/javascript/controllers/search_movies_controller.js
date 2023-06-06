import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = [
    'form',
    'input',
    'list'
  ]
  connect() {
    console.log(this.formTarget)
    console.log(this.inputTarget);
    console.log(this.listTarget);
  }
}