import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ 'count' ];

  refresh() {
    fetch('/restaurants', { headers: { accept: 'application/json' } })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.countTarget.innerText = data.restaurants.length;
      });
  }

  refresh_review(event) {
    const id = event.target.dataset.id
    fetch("/restaurants/"+id, { headers: { accept: 'application/json' } })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.countTarget.innerText = data.reviews.length;
      });
  }
}