import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {
  title = "Credit Detail"
  credit: Credit = null;
  creditID: number = 0;

  constructor(private creditSvc: CreditService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // get id from the url
    this.route.params.subscribe(
      parms => { 
        this.creditID = parms['id']
        console.log(this.creditID);
      },
    );
    //get credit by id
    this.creditSvc.getByID(this.creditID).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Actor',this.credit);
      },
      err => {
        console.log(err);
      }
    );
  }

  // delete
  delete() {
    this.creditSvc.delete(this.creditID).subscribe(
      resp => {
        this.credit = resp as Credit;
        console.log('Credit deleted',this.credit)
        // forward to the credit list component
        this.router.navigateByUrl("/credit-list")
      },
      err => {
        console.log(err);
      }
    );
  }

}
