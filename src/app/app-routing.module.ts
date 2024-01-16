import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RealEstateFormComponent } from './real-estate-form/real-estate-form.component';
import { RealEstateListComponent } from './real-estate-list/real-estate-list.component';
import { RealEstateItemComponent } from './real-estate-item/real-estate-item.component';

const routes: Routes = [
  {path: 'loginUser', component: LoginComponent },
  {path: 'registerUser', component: RegistrationComponent},
  { path: 'realEstateList', component: RealEstateListComponent },
  { path: 'realEstateForm', component: RealEstateFormComponent },
  {path: 'realEstateItem', component: RealEstateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
