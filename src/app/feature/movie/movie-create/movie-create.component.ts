import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  title = "Movie Create";
  movie: Movie = new Movie();
  submitBtnTitle = "Create";

  constructor(private movieSvc: MovieService, private router: Router) { }

  ngOnInit() {

  }

  save() {
    // save the movie to the DB
    this.movieSvc.create(this.movie).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie created',this.movie)
        // forward to the movie list component
        this.router.navigateByUrl("/movie-list")
      },
      err => {
        console.log(err);
      }
    );
  }

}