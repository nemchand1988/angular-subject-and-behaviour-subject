import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'sub',
  templateUrl: './sub.component.html',
})
export class SubComponent implements OnInit {
  users: any = [];

  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.s_user.subscribe((res) => {
      console.log(res);
      this.users.push(res);
    });
  }
}
