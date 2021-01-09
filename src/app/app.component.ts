import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmdb-ng';
  movies = ["Blazing Saddles", "Austin Powers", "The Fifth Element", "Bad Boys", "Contact"];

}
