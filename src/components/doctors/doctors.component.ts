// import { Component } from '@angular/core';
// import { doctor } from 'src/models/doctor';
// import { ApiService } from 'src/services/api.service';
// import { ScheduleAppointmentComponent } from '../schedule-appointment/schedule-appointment.component';
// import { MatDialog } from '@angular/material/dialog';

// @Component({
//   selector: 'app-doctors',
//   templateUrl: './doctors.component.html',
//   styleUrls: ['./doctors.component.css']
// })
// export class DoctorsComponent {

//   doctorsDisplayed: doctor[] = [];

//   constructor(private apiService: ApiService, public dialog:MatDialog){}
 
//   ngOnInit(): void {
//     this.loadProducts();
//   }
 
//   loadProducts(): void {
//     this.apiService.getAllDoctors().subscribe(data => {
//       this.doctorsDisplayed = data;
      
//     });
    
//   }
//   openDialog(): void {
//     const dialogRef = this.dialog.open(ScheduleAppointmentComponent, {
//       width: '600px',
//     });
//   }

// }
import { Component } from '@angular/core';
import { doctor } from 'src/models/doctor';
import { ApiService } from 'src/services/api.service';
import { ScheduleAppointmentComponent } from '../schedule-appointment/schedule-appointment.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {

  doctorsDisplayed: doctor[] = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) { }
 
  ngOnInit(): void {
    this.loadDoctors();
  }
 
  loadDoctors(): void {
    this.apiService.getAllDoctors().subscribe((data: doctor[]) => {
      this.doctorsDisplayed = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ScheduleAppointmentComponent, {
      width: '600px',
    });
  }
}
