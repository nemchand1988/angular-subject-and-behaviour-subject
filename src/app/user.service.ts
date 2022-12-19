import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Array<any> = [
    {
      name: 'Nemchand',
      age: '33',
    },
  ];

  public s_user = new Subject<any>();
  public b_user = new BehaviorSubject<any>(this.users[0]);

  constructor() {}

  ngOnInit() {
    this.s_user.next(this.users[0]);
  }

  adduser(user) {
    this.s_user.next(user);
    this.b_user.next(user);
  }
}
