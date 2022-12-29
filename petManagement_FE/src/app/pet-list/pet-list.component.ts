import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';


@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
  
})
export class PetListComponent implements OnInit {
   pets: Pet[];

  constructor(private petService: PetService,
    private router: Router,) {}

  ngOnInit():void{
    
    this.getPets();
  }

  private getPets(){
    this.petService.getPetsList().subscribe(data =>{
      this.pets = data;
    })
  }

  updatePet(id: number){
    this.router.navigate(['update-pet', id]);

  }
}
