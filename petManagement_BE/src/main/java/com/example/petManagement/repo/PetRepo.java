package com.example.petManagement.repo;

import com.example.petManagement.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PetRepo extends JpaRepository<Pet, Integer>  {
         Optional<Pet> findPetById(Integer id);
     }
