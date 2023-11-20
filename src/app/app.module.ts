import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from 'src/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TableModule,
    ButtonModule,
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
