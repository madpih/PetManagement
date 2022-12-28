import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { LoginComponent } from './login/login.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';

const routes: Routes = [
  {path: 'pets', component: PetListComponent},
  {path: 'add-pet', component: AddPetComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-pet/:id', component: UpdatePetComponent},
  {path: 'registration', component:RegisterComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
