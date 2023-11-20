import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from 'src/services/user.service';
import { appointmentDetails } from 'src/models/appointmentDetails';

@Component({
  selector: 'app-docotr-appointment',
  templateUrl: './docotr-appointment.component.html',
  styleUrls: ['./docotr-appointment.component.css']
})
export class DocotrAppointmentComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain, */*',
      'Content-Type': 'application/json' 
    }),
    responseType: 'text' as 'json'  
  };

  appointments: appointmentDetails[] = [];
  doctorName: any;

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    const doctorId = this.userService.getUser();
    console.log(doctorId);
    
    this.http.get<string>(`http://localhost:8080/${doctorId}/name`, this.httpOptions).subscribe(
      (doctorName: string) => {
        this.doctorName = doctorName;
        console.log(this.doctorName);

        this.http.get(`http://localhost:8080/doctor/${this.doctorName}`, this.httpOptions).subscribe(
          (data: string) => {
            console.log('Type of appointment data', typeof(data));
            console.log('Appointments data', data);
            
            try {
              this.appointments = JSON.parse(data);
              console.log('Parsed appointments', this.appointments);
            } catch (e) {
              console.error('Error parsing appointments data:', e);
            }
          },
          (error: any) => {
            console.error(error);
          }
        );
      },
      (error: any) => {
        console.error(error);
      }
    );


  }

}
