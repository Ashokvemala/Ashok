import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AboutComponent } from './about/about.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SteperformComponent } from './steperform/steperform.component';
                                  
@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // AboutComponent,
    FormarrayComponent,
    TemplateFormsComponent,
    ApiComponent,
    SignupComponent,
    LoginComponent,
    SteperformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
