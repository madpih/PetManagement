package com.example.petManagement.service;

import com.example.petManagement.model.Person;
import com.example.petManagement.repo.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository repo;
    public Person saveUser(Person person){
        return repo.save(person);
    }

    public Person fetchUserByEmailid(String email) {
        return repo.findByEmailid(email);
    }
    public Person fetchUserByEmailidAndPassword(String email, String password) {
        return repo.findByEmailidAndPassword(email, password);

    }


}