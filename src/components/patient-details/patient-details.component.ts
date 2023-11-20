import { Component,OnInit} from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { patient } from 'src/models/patient';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})

export class PatientDetailsComponent implements OnInit {

  patientId!:string;
  patientDetails!:patient;

  constructor(private apiService : ApiService,private userService:UserService)
  {

  }
  ngOnInit(): void {
    
    console.warn('roleType',this.userService.getUserType());
    
    console.warn(this.userService.getUserType());
    
    if (this.userService.isLoggedIn && this.userService.getUserType()?.toLowerCase() === 'patient') {
      const userDetails = this.userService.getUser();
      console.error(userDetails);
      if (!userDetails) {
        return;
      }
      this.apiService.getPatientById(userDetails).subscribe((patient: any) => {
        console.log(patient);
  
        this.patientDetails = patient as patient;
        console.log('Patient details', this.patientDetails);
        
  
      });
      
    }
    
  }
  

}
