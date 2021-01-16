import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {
  title = "Credit Edit"
  credit: Credit = null;
  submitBtnTitle = "Save";
  actors: Actor[] = [];
  movies: Movie[] = [];
  creditID: number = 0;

  constructor(private creditSvc: CreditService, private actorSvc: ActorService, 
                  private movieSvc: MovieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get url id from url
    this.route.params.subscribe(
      parms => 
        { this.creditID = parms['id']
          console.log(this.creditID);
        },
      );

    // get credit by id
    this.creditSvc.getByID(this.creditID).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Actor',this.credit);
      },
      err => {
        console.log(err);
      }
    );
    // get list of actors    
    this.actorSvc.getAll().subscribe(
      resp => {
        this.actors = resp as Actor[];
      },
      err => {
        console.log(err);
      }
    );

    // get list of movies
    this.movieSvc.getAll().subscribe(
      resp => {
        this.movies = resp as Movie[];
      },
      err => {
        console.log(err);
      }
    );
  }
  save() {
    // save the credit to the DB
    this.creditSvc.create(this.credit).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit created',this.credit)
        // forward to the credit list component
        this.router.navigateByUrl("/credit-list")
      },
      err => {
        console.log(err);
      }
    );
  }

  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id == b.id
  }

  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id == b.id
  }

}
