package com.example.petManagement.controller;

import com.example.petManagement.model.Person;
import com.example.petManagement.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RegistrationController {

    @Autowired
    private RegistrationService service;

    @PostMapping("/signup")
    public Person registerUser(@RequestBody Person person) throws Exception {
        String tempEmailid = person.getEmailid();
        if(tempEmailid !=null && !"".equals(tempEmailid)){
            Person appUserObj = service.fetchUserByEmailid(tempEmailid);
            if (appUserObj != null) {
                throw new Exception ("User with "+tempEmailid+" already exists");
            }
        }
        Person personObj = null;
        personObj = service.saveUser(person);
        return personObj;
    }
    @PostMapping("/login")
    public Person loginUser(@RequestBody Person person) throws Exception {
        String tempEmailid = person.getEmailid();
        String tempPass = person.getPassword();
        Person personObj = null;
        if (tempEmailid !=null && tempPass !=null){
            personObj= service.fetchUserByEmailidAndPassword(tempEmailid, tempPass);
        }
        if (personObj == null) {
            throw new Exception("bad credentials");
        }

        return personObj;
    }
}
