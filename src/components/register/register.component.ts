import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  patientName!: string;
  email!: string;
  password!: string;
  contact!: string;
  age!: string;
  sex!: string;
  bloodGroup!: string;
  dob!: string;


  constructor(private http: HttpClient, private router: Router) { }

  signup() {
    const requestBody = {
      patientName: this.patientName,
      email: this.email,
      password: this.password,
      contact: this.contact,
      age: this.age,
      sex: this.sex,
      bloodGroup: this.bloodGroup,
      dob:this.bloodGroup
    };


    this.http.post('http://localhost:8080/patient/signup', requestBody)
    .subscribe(response => {
      this.router.navigate(['/login']);
      alert("Login success");
    }, error => {
      console.log(error);
      alert('Signup failed. Please fill all fields');
    });
  }
 

}
