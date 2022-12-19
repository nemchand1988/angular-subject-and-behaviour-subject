import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  constructor(public userservice: UserService) {}

  ngOnInit() {
    // console.log(this.userservice.users);
  }

  add(name, age) {
    this.userservice.adduser({ name: name, age: age });
  }
}
