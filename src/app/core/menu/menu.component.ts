import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [
      new MenuItem("Movie","/movie-list","Movie List"),
      new MenuItem("Actor","/actor-list","Actor List"),
      new MenuItem("Credit","/credit-list","Credit List"),
      new MenuItem("User","/user-list","User List"),
      new MenuItem("Login","/user-login","User Login")
    ];

  constructor() { }

  ngOnInit() {
  }

}
