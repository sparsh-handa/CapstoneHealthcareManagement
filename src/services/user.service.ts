// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { patient } from 'src/models/patient';
// import { BehaviorSubject } from 'rxjs';
// import { doctor } from 'src/models/doctor';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   patient: patient[] = [];
//   doctor: doctor[]=[];
//   isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
//   userId: string = null;
//   private userType: 'Patient' | 'Doctor' = null;

//   constructor(private http: HttpClient) { }

//   setUserType(role: 'Patient' | 'Doctor'): void {
//     this.userType = role;
//   }

//   getUserType(): string {
//     return this.userType;
//   }

//   setUser(user: string): void {
//     console.log(user);

//     this.userId = user
//   }

//   getUser(): string {
//     return this.userId;
//   }


//   setLoggedIn(isLoggedIn: boolean): void {
//     this.isLoggedIn$.next(true);
//   }

//   get isLoggedIn(): BehaviorSubject<boolean> {
//     return this.isLoggedIn$;
//   }

// }

// class User {

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { patient } from 'src/models/patient';
import { BehaviorSubject } from 'rxjs';
import { doctor } from 'src/models/doctor';

@Injectable({ providedIn: 'root' }) export class UserService {

  patient: patient[] = [];
  doctor: doctor[] = [];
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  userRole$: BehaviorSubject<string> = new BehaviorSubject(null);
  userId: string = null;

  constructor(private http: HttpClient) {
    console.log('User Service');
    
    this.isLoggedIn$.next(false);
  }

  setUserType(role: 'Patient' | 'Doctor'): void {
    console.log('Setting user role to', role);
    this.userRole$.next(role);
  }

  getUserType(): string { const userRole = this.userRole$.getValue(); console.log('Getting user role:', userRole); return userRole; }

  setUser(user: string): void { 
    console.log('setting user', user); 
    this.userId = user; 
  }

  getUser(): string { 
    console.log('getting user id', this.userId);
    
    return this.userId; 
  }

  setLoggedIn(isLoggedIn: boolean): void { this.isLoggedIn$.next(isLoggedIn); }

  get isLoggedIn(): BehaviorSubject<boolean> { return this.isLoggedIn$; }

}