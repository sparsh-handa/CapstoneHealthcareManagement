
// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MedicalHistoryComponent } from '../medical-history/medical-history.component';
// import { ApiService } from 'src/services/api.service';
// import { MedicalHistory } from 'src/models/medicalHistory';
// import { MatTableDataSource } from '@angular/material/table';
// import { UserService } from 'src/services/user.service';
// import { MatTable } from '@angular/material/table';


// @Component({
//   selector: 'app-patient-medical-history',
//   templateUrl: './patient-medical-history.component.html',
//   styleUrls: ['./patient-medical-history.component.css']
// })
// export class PatientMedicalHistoryComponent implements OnInit {
//   historyDisplayed: MatTableDataSource<MedicalHistory> = new MatTableDataSource<MedicalHistory>([]);
//   displayedColumns: string[] = ['dotorName', 'disease', 'bloodGroup', 'medication', 'surgeries', 'allergy', 'vaccinations', 'lifestyle'];

//   constructor(private apiService: ApiService, public dialog: MatDialog, private userService: UserService) {
//     this.historyDisplayed = new MatTableDataSource<MedicalHistory>([]);
//   }

//   ngOnInit(): void {

//     const userDetails = this.userService.getUser();
//     console.error(userDetails);

//     this.apiService.getMedicalHistory(userDetails).subscribe((data: any) => {
//       this.historyDisplayed = new MatTableDataSource<MedicalHistory>(data);
//       console.log(this.historyDisplayed);

//     });
//   }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(MedicalHistoryComponent, {
//       width: '600px',
//     });
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MedicalHistoryComponent } from '../medical-history/medical-history.component';
// import { ApiService } from 'src/services/api.service';

// import { MatTableDataSource } from '@angular/material/table';
// import { UserService } from 'src/services/user.service';
// import { MedicalHistory } from 'src/models/medicalHistory';

// @Component({
//   selector: 'app-patient-medical-history',
//   templateUrl: './patient-medical-history.component.html',
//   styleUrls: ['./patient-medical-history.component.css']
// })
// export class PatientMedicalHistoryComponent implements OnInit {
//   historyDisplayed: MatTableDataSource<MedicalHistory> = new MatTableDataSource<MedicalHistory>([]);
//   displayedColumns: string[] = ['dotorName', 'disease', 'bloodGroup', 'medication', 'surgeries', 'allergy', 'vaccinations', 'lifestyle'];

//   meds:any
//   medicalHistory:any
//   constructor(private apiService: ApiService, public dialog: MatDialog, private userService: UserService) {}

//   ngOnInit(): void {
//     const userDetails = this.userService.getUser();
//     console.error(userDetails);

//     this.apiService.getMedicalHistory(userDetails).subscribe((data: any) => {
//       this.meds = new MatTableDataSource<MedicalHistory>(data);
//       console.log(this.meds);
//     });
//   }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(MedicalHistoryComponent, {
//       width: '600px',
//     });
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatTableDataSource } from '@angular/material/table';
// import { MedicalHistory } from 'src/models/medicalHistory';
// import { ApiService } from 'src/services/api.service';
// import { UserService } from 'src/services/user.service';
// import { MedicalHistoryComponent } from '../medical-history/medical-history.component';

// @Component({
//   selector: 'app-patient-medical-history',
//   templateUrl: './patient-medical-history.component.html',
//   styleUrls: ['./patient-medical-history.component.css']
// })
// export class PatientMedicalHistoryComponent implements OnInit {

//   meds: MatTableDataSource<MedicalHistory>;
//   displayedColumns: string[] = ['dotorName', 'disease', 'bloodGroup', 'medication', 'surgeries', 'allergy', 'vaccinations', 'lifestyle'];

//   constructor(private userService: UserService,
//     private apiService: ApiService,
//     public dialog: MatDialog) { }

//   ngOnInit(): void {
//     const userDetails = this.userService.getUser();

//     this.apiService.getMedicalHistory(userDetails).subscribe((data: any) => {
//       this.meds = new MatTableDataSource<MedicalHistory>(data);
//     });
//   }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(MedicalHistoryComponent, {
//       width: '600px',
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.meds.data.push(result);
//         this.meds.data = [...this.meds.data];
//       }
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MedicalHistory } from 'src/models/medicalHistory';
import { ApiService } from 'src/services/api.service';
import { UserService } from 'src/services/user.service';
import { MedicalHistoryComponent } from '../medical-history/medical-history.component';

@Component({
  selector: 'app-patient-medical-history',
  templateUrl: './patient-medical-history.component.html',
  styleUrls: ['./patient-medical-history.component.css']
})
export class PatientMedicalHistoryComponent implements OnInit {

  medicalRecords: MatTableDataSource<MedicalHistory>;
  displayedColumns: string[] = [ 'disease', 'bloodGroup', 'medication', 'surgeries', 'allergy', 'vaccinations', 'lifestyle'];

  constructor(private userService: UserService,
              private apiService: ApiService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    const userDetails = this.userService.getUser();

    this.apiService.getMedicalHistory(userDetails).subscribe((data: any) => {
      this.medicalRecords = new MatTableDataSource<MedicalHistory>(data);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MedicalHistoryComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.medicalRecords.data.push(result);
        this.medicalRecords.data = [...this.medicalRecords.data];
      }
    });
  }
}