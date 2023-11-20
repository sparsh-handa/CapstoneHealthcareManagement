import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain, */*',
      'Content-Type': 'application/json' // We send JSON
    }),
    responseType: 'text' as 'json'  // We accept plain text as response.
  };
  email: string = "";
  password: string = "";
  @Output() loggedIn = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  onSubmit() {
    this.http.post<any>('http://localhost:8080/doctor/login', { email: this.email, password: this.password }, this.httpOptions)
      .subscribe(
        (data: any) => {
          // Successful login, store user object in local storage and redirect to dashboard
          localStorage.setItem('userName', data.userName);
          localStorage.setItem('email', data.email);
          this.userService.setUser(JSON.parse(data)?.doctorId);
          this.userService.setUserType('Doctor');
          this.userService.setLoggedIn(true);
          console.warn(this.userService.isLoggedIn);
          this.loggedIn.emit(true); // Emit loggedIn event
          this.router.navigate(['/doctorNav/home']);
          alert("Login success");
        }, (error: any) => {
          alert("Login failed. Please try again.");
        });
  }

}
