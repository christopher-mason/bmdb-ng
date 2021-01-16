import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  title = "Actor Detail";
  actor: Actor= null;
  actorID: number = 0;

  constructor(private actorSvc: ActorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // get id from the url
    this.route.params.subscribe(
      parms => { 
        this.actorID = parms['id']
        console.log(this.actorID);
      },
    );
    //get actor by id
    this.actorSvc.getByID(this.actorID).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor',this.actor);
      },
      err => {
        console.log(err);
      }
    );
  }

  // Delete function
  delete() {
    this.actorSvc.delete(this.actorID).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor deleted',this.actor)
        // forward to the actor list component
        this.router.navigateByUrl("/actor-list")
      },
      err => {
        console.log(err);
      }
    );
  }

}
