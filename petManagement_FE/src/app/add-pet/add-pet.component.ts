import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  
  pet: Pet = new Pet(); 
  constructor(private petService: PetService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePet(){
    this.petService.addPet(this.pet).subscribe({
      next: (data) => this.goToPetList(),
      error: (error) => console.error(error),
      complete: () => console.log("complete") 
})
      }

  goToPetList(){
    this.router.navigate(['/pets'])

  }
 
  onSubmit(){
    console.log(this.pet);
    this.savePet();
  }

}
