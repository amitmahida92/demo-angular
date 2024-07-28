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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectServiceComponent } from './pages/select-service/select-service.component';

import { ApiModule as CustomerCompositeModule, Configuration as CustomerCompositeConfiguration } from '@savvy/customer';
import { ApiModule as DatalistModule, Configuration as DatalistConfiguration } from '@savvy/datalist';


import { ConfService } from './config.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SelectSchedulesComponent } from './pages/select-schedules/select-schedules.component';
import { BookingConfirmationComponent } from './pages/booking-confirmation/booking-confirmation.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ModelComponent } from './model/model.component';
import { ModalService } from './services/modal.service';
import { BookingStateService } from './services/booking-state.service'


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
    NotFoundComponent,
    ModelComponent
  ],
  bootstrap: [AppComponent], imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerCompositeModule.forRoot(() => {
      return new CustomerCompositeConfiguration({
        basePath: ConfService.apiUrl()
      });
    }),
    DatalistModule.forRoot(() => {
      return new DatalistConfiguration({
        basePath: ConfService.apiUrl()
      });
    })], providers: [ModalService, BookingStateService, provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
