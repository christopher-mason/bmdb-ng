import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title = "Actor Edit";
  actor: Actor = null;
  actorID: number = 0;
  submitBtnTitle = "Save";

  constructor(private actorSvc: ActorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // get id from the url
    this.route.params.subscribe(
      parms => 
        { this.actorID = parms['id']
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

  // add save function
  save() {
    this.actorSvc.update(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        console.log('Actor updated',this.actor)
        // forward to the actor list component
        this.router.navigateByUrl("/actor-list")
      },
      err => {
        console.log(err);
      }
    );
  }

}
