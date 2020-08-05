import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Actual boxes object - to keep original sets
  setOfBoxes = [
    {
      name: 1,
      color: "#000000"
    },
    {
      name: 2,
      color: "#333333"
    },
    {
      name: 3,
      color: "#FFFFFF"
    },
    {
      name: 4,
      color: "#EFEFEF"
    },
    {
      name: 5,
      color: "#72C3DC"
    },
    {
      name: 6,
      color: "#2B8EAD"
    },
    {
      name: 7,
      color: "#6F98A8"
    },
    {
      name: 8,
      color: "#BFBFBF"
    },
    {
      name: 9,
      color: "#2F454E"
    }
  ];

  // Used to render in view
  boxes;

  // Constructor method
  constructor() {
    this.boxes = JSON.parse(JSON.stringify(this.setOfBoxes));
  }

  /*
    Shuffle method - void method
    To shuffle the boxes
  */
  shuffle() {
    for (var i = this.boxes.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.boxes[i];
      this.boxes[i] = this.boxes[j];
      this.boxes[j] = temp;
    }
  }

  /*
    sort method - void method
    Sort into original order
  */
  sort() {
    this.boxes = JSON.parse(JSON.stringify(this.setOfBoxes));
  }
}
