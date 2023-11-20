import { Component, OnInit } from '@angular/core';
import { appointmentDetails } from 'src/models/appointmentDetails';
import { UserService } from 'src/services/user.service';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: appointmentDetails[];

  constructor(private apiService: ApiService, private userService: UserService) { }

  ngOnInit(): void {

    const loggedInPatientId = this.userService.getUser(); 
    // const loggedInPatientId = (this.userService.getUser() as {_id: string})._id;
    this.apiService.getAppointmentsByPatientId(loggedInPatientId).subscribe(appointment => {
      console.log(appointment);
      this.appointments = appointment;
      
      
    });
  }

}
