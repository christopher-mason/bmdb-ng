import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title = "Movie Edit";
  movie: Movie = null;
  movieID: number = 0;
  submitBtnTitle = "Save";

  constructor(private movieSvc: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get id from the url
    this.route.params.subscribe(
      parms => 
        { this.movieID = parms['id']
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

  // add save function
  save() {
    this.movieSvc.update(this.movie).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie updated',this.movie)
        // forward to the movie list component
        this.router.navigateByUrl("/movie-list")
      },
      err => {
        console.log(err);
      }
    );
  }

}
