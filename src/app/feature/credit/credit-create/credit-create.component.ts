import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {
  title = "Credit Create"
  credit: Credit = new Credit();
  submitBtnTitle = "Create";

  constructor(private creditSvc: CreditService, private router: Router) { }

  ngOnInit() {
  }

}
