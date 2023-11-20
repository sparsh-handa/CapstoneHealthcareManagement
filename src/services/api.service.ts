import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicalHistory } from 'src/models/medicalHistory';
import { patient } from 'src/models/patient';
import { doctor } from 'src/models/doctor';
import { appointmentDetails } from 'src/models/appointmentDetails';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain, */*',
      'Content-Type': 'application/json' 
    }),
    responseType: 'text' as 'json'  
  };

  constructor(private http:HttpClient) { }

  getPatientById(patientId: string): Observable<String> {
    return this.http.get<String>(`http://localhost:8080/patient/${patientId}`);
  }
  getDoctorById(doctorId: string): Observable<String> {
    return this.http.get<String>(`http://localhost:8080/doctor/${doctorId}`);
  }

  addMedicalData(medical: MedicalHistory) : Observable<String> {
    const url = `http://localhost:8080/medicalhistory/medical`;
    return this.http.post<String>(url, medical, this.httpOptions);
  }
  getMedicalHistory(patientId:string):Observable<MedicalHistory>
  {
    const abc = this.http.get<MedicalHistory>(`http://localhost:8080/medicalhistory/${patientId}`)
    console.log(abc);
    return abc;
  }
  getAllDoctors():Observable<doctor[]>{
    const url = `http://localhost:8080/doctor`;
    return this.http.get<doctor[]>(url);
  }

  addAppointmentData(appointmentData: appointmentDetails): Observable<any> {
    const url = 'http://localhost:8080/appointment';
    return this.http.post<appointmentDetails>(url, appointmentData);
  }

  getAppointmentsByPatientId(patientId: string): Observable<appointmentDetails[]> {
    const url = `http://localhost:8080/appointment/${patientId}`;
    return this.http.get<appointmentDetails[]>(url);
  }

  
}


