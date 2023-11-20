import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'HMSCapstoneAngular';

  isLoggedIn : boolean = false;
  subscriptions: Subscription[] = []
  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.isLoggedIn.subscribe(value => {
        this.isLoggedIn = value;
      });
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(s => s?.unsubscribe());
  }

  onLoggedIn(status: boolean){
    this.isLoggedIn = status;
  }
}
