import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SelectServiceComponent } from './pages/select-service/select-service.component';

import { ApiModule as CustomerCompositeModule, Configuration as CustomerCompositeConfiguration } from '@savvy/customer';
import { ApiModule as DatalistModule, Configuration as DatalistConfiguration } from '@savvy/datalist';


import { ConfService } from './config.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SelectSchedulesComponent } from './pages/select-schedules/select-schedules.component';
import { BookingConfirmationComponent } from './pages/booking-confirmation/booking-confirmation.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SelectServiceComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SelectSchedulesComponent,
    BookingConfirmationComponent,
    DialogComponent,
    AddPetComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CustomerCompositeModule.forRoot(() => {
      return new CustomerCompositeConfiguration({
        basePath: ConfService.apiUrl()
      });
    }),
    DatalistModule.forRoot(() => {
      return new DatalistConfiguration({
        basePath: ConfService.apiUrl()
      });
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
