import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  title = "Credit List";
  credits: Credit[]= [];

  constructor(private creditSvc: CreditService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    console.log ('credit list - loggedInUser?',this.sysSvc.loggedInUser);
    // populate list of credits
    this.creditSvc.getAll().subscribe(
      resp => {
        this.credits = resp as Credit[];
        console.log('Credits',this.credits);
      },
      err => {
        console.log(err)
      }
    );
  }
}
