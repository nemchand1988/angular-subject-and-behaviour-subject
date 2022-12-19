import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'bsub',
  templateUrl: './bsub.component.html',
})
export class BsubComponent implements OnInit {
  users: any = [];

  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.b_user.subscribe((res) => {
      this.users.push(res);
    });
  }

  ngAfterViewInit() {}
}
