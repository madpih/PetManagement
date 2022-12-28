package com.example.petManagement.repo;

import com.example.petManagement.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Person, Integer> {


    public Person findByEmailid(String emailid);
    public Person findByEmailidAndPassword(String emailid, String password);
}
