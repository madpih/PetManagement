package com.example.petManagement.controller;

import com.example.petManagement.model.Pet;
import com.example.petManagement.service.PetService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pets" )
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Pet>> getAllPets() {
        List<Pet> pets = petService.getAllPets();
        return new ResponseEntity<>(pets, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Pet> addPet(@RequestBody Pet pet) {
        Pet newPet =  petService.addPet(pet);
        return new ResponseEntity<>(newPet,HttpStatus.CREATED);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable("id") Long id) {
        Pet pet = petService.findPetById(id);
        return new ResponseEntity<>(pet, HttpStatus.OK);
    }

   @PutMapping("/update/{id}")
    public ResponseEntity<Pet> updatePet(@RequestBody Pet pet){
       Pet updatePet = petService.updatePet(pet);
       return new ResponseEntity<>(updatePet, HttpStatus.OK);
    }
}

