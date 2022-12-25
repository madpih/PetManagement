package com.example.petManagement.service;

import com.example.petManagement.exception.UserNotFoundException;
import com.example.petManagement.model.Pet;
import com.example.petManagement.repo.PetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service


public class PetService {
    private final PetRepo petRepo;

    @Autowired
    public PetService(PetRepo petRepo) {
        this.petRepo = petRepo;
    }

    public Pet addPet(Pet pet) {
       return petRepo.save(pet);
    }

    public List<Pet> getAllPets() {
        return petRepo.findAll();
    }

    public Pet findPetById(Long id) {
        return petRepo.findPetById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public Pet updatePet( Pet pet) {
        return petRepo.save(pet);
    }
}


