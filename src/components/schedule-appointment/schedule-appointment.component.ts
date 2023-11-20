import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/services/user.service';
import { patient } from 'src/models/patient';
import { appointmentDetails } from 'src/models/appointmentDetails';
@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent {

  appointmentForm!:FormGroup;
  patientid : string;

  constructor(private fb: FormBuilder, private apiService: ApiService, public dialogRef: MatDialogRef<ScheduleAppointmentComponent>,
    private userService: UserService) { }

    ngOnInit(): void {
      this.patientid = this.userService.getUser();
      if (!this.patientid) {
        alert('Patient is not logged in!');
        return;
      }
      this.appointmentForm = this.fb.group({
        patientId: this.patientid,
        doctorName: ['', Validators.required],
        date: ['', Validators.required],
        slot: ['', Validators.required],
        symptoms: ['', Validators.required],
        email: ['', Validators.required]
      });
  
    }
  
    onSubmit(): void {
      const appointmentData: appointmentDetails = this.appointmentForm.value;
      this.apiService.addAppointmentData(appointmentData).subscribe({
        next: (res: appointmentDetails) => {
          console.log(res);
          alert("Booked Successfully")
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }


}
