import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';

const routes: Routes = [
  {path: 'pets', component: PetListComponent},
  {path: 'add-pet', component: AddPetComponent},
  {path: '', redirectTo: 'pets', pathMatch: 'full'},
  {path: 'update-pet/:id', component: UpdatePetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
