import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { FormsModule } from '@angular/forms';
import { SupportComponent } from './support/support.component';
import { ResourcesComponent } from './resources/resources.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientMedicalHistoryComponent } from './patient-medical-history/patient-medical-history.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DoctorsComponent } from './doctors/doctors.component';
import {CardModule} from 'primeng/card';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { NavbarDoctorComponent } from './navbar-doctor/navbar-doctor.component';
import { DocotrAppointmentComponent } from './docotr-appointment/docotr-appointment.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AdminComponent } from './admin/admin.component';

      









@NgModule({
  declarations: [
    LandingPageComponent,
    RegisterComponent,
    NavbarComponent,
    DoctorLoginComponent,
    SupportComponent,
    ResourcesComponent,
    PatientDetailsComponent,
    PatientMedicalHistoryComponent,
    MedicalHistoryComponent,
    HomeComponent,
    DoctorsComponent,
    ScheduleAppointmentComponent,
    AppointmentsComponent,
    NavbarDoctorComponent,
    DocotrAppointmentComponent,
    DoctorDetailsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    CardModule
    
  ],
  exports: [
    LandingPageComponent,
    RegisterComponent,
    DoctorLoginComponent,
    NavbarComponent,
    SupportComponent,
    ResourcesComponent,
    PatientDetailsComponent,
    PatientMedicalHistoryComponent,
    MedicalHistoryComponent,
    HomeComponent,
    DoctorsComponent,
    ScheduleAppointmentComponent,
    AppointmentsComponent,
    NavbarDoctorComponent,
    DocotrAppointmentComponent,
    DoctorDetailsComponent,
    AdminComponent
  ]
})
export class ComponentsModule { }
