import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  connect() {
    console.log('connected to the edit movie controller')
  }
}
