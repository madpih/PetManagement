import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})

export class UpdatePetComponent implements OnInit {
  id: number;
  pet: Pet = new Pet();
  constructor(private petService: PetService,
     private route: ActivatedRoute,
     private router: Router) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.petService.getPetById(this.id).subscribe({
      next: (data) => this.pet = data,
      error: (error) => console.log(error),
      complete: () => console.log("complete")
  })
}

  onSubmit(){
    this.petService.updatePet(this.id, this.pet).subscribe({
      next: (data) => this.goToPetList(),
      error: (error) => console.error(error),
      complete: () => console.log("complete") 
  })
}

  goToPetList(){
    this.router.navigate(['/pets']);
  }
}
