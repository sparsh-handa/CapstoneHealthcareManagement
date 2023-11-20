import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/components/admin/admin.component';
import { AppointmentsComponent } from 'src/components/appointments/appointments.component';
import { DocotrAppointmentComponent } from 'src/components/docotr-appointment/docotr-appointment.component';
import { DoctorDetailsComponent } from 'src/components/doctor-details/doctor-details.component';
import { DoctorLoginComponent } from 'src/components/doctor-login/doctor-login.component';
import { DoctorsComponent } from 'src/components/doctors/doctors.component';
import { HomeComponent } from 'src/components/home/home.component';
import { LandingPageComponent } from 'src/components/landing-page/landing-page.component';
import { NavbarDoctorComponent } from 'src/components/navbar-doctor/navbar-doctor.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { PatientDetailsComponent } from 'src/components/patient-details/patient-details.component';
import { PatientMedicalHistoryComponent } from 'src/components/patient-medical-history/patient-medical-history.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { ResourcesComponent } from 'src/components/resources/resources.component';
import { ScheduleAppointmentComponent } from 'src/components/schedule-appointment/schedule-appointment.component';
import { SupportComponent } from 'src/components/support/support.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'login',
    pathMatch: "full"

  },
  {
    path: "login",
    component: LandingPageComponent
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "navbar",
    component: NavbarComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'patient-details', component: PatientDetailsComponent
      },
      {
        path: 'doctors', component: DoctorsComponent
      },
      {
        path: 'meeting', component: SupportComponent
      },
      {
        path: 'resources', component: ResourcesComponent
      },
      {
        path: 'history', component: PatientMedicalHistoryComponent
      },
      {
        path: 'appointment', component: AppointmentsComponent
      },

    ]
  },
  {
    path: "doctor-login",
    component: DoctorLoginComponent
  },
 
  {
    path: "schedule",
    component: ScheduleAppointmentComponent
  },
 
  {
    path: "doctorNav",
    component: NavbarDoctorComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'patient-details', component: PatientDetailsComponent
      },

      {
        path: 'meeting', component: SupportComponent
      },

      {
        path: 'doctorAppointments', component: DocotrAppointmentComponent
      },
      {
        path: 'doctorsDetail', component:DoctorDetailsComponent
      },

    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
