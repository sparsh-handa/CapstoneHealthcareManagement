import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { doctor } from 'src/models/doctor';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctorId!: string;
  doctorDetails: doctor | undefined;

  constructor(private apiService : ApiService, private userService: UserService) { }

  ngOnInit(): void {
    if (this.userService.isLoggedIn && this.userService.getUserType()?.toLowerCase() === 'doctor') {
      const userDetails = this.userService.getUser();
      console.log(userDetails);
      
      if (!userDetails) {
        return;
      }
      this.apiService.getDoctorById(userDetails).subscribe((doctor: any) => {
        console.log(doctor);

        this.doctorDetails = doctor as doctor;
        console.log('Doctor details', this.doctorDetails);
      });

    }
  }

}