import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//added router module to detect url
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { EncountersComponent } from './pages/encounters/encounters.component';
import { ReportComponent } from './pages/report/report.component';

//added different urls to detect and which moduels to display
const appRoutes: Routes = [  
  { path: '' , component : HomeComponent },
  { path: 'register' , component : RegisterComponent },
  { path: 'encounters' , component : EncountersComponent },
  { path: 'reports' , component : ReportComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    EncountersComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    //added new module and added mtheod to display moduels
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
