import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title = "Movie Detail";
  movie: Movie = null;
  movieID: number = 0;

  constructor(private movieSvc: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // get id from the url
    this.route.params.subscribe(
      parms => { this.movieID = parms['id']
      console.log(this.movieID);
    },
    );
    //get movie by id
    this.movieSvc.getByID(this.movieID).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie',this.movie);
      },
      err => {
        console.log(err);
      }
    );
  }

  // Delete function
  delete() {
    this.movieSvc.delete(this.movieID).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie deleted',this.movie)
        // forward to the movie list component
        this.router.navigateByUrl("/movie-list")
      },
      err => {
        console.log(err);
      }
    );
  }
}
