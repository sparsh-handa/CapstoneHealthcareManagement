import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/services/api.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  medicalForm !: FormGroup;
  patientid: string = null;

  constructor(private fb: FormBuilder, private apiService: ApiService, public dialogRef: MatDialogRef<MedicalHistoryComponent>,
    private userService: UserService) { }


  ngOnInit(): void {
    this.patientid = this.userService.getUser();
    if (!this.patientid) {
      alert('Patient is not logged in!');
      return;
    }
    this.medicalForm = this.fb.group({
      patientId: this.patientid,
      dotorName: ['', Validators.required],
      disease: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      medication: ['', Validators.required],
      surgeries: ['', Validators.required],
      allergy: ['', Validators.required],
      vaccinations: ['', Validators.required],
      lifestyle: ['', Validators.required],
    });

  }

  onSubmit(): void {
    const medicalData = this.medicalForm.value;
    this.apiService.addMedicalData(medicalData).subscribe({
      next: (res) => {
        console.log(res);
        alert("Details Updated successfully");
        this.dialogRef.close();

      }
    });
  }

}