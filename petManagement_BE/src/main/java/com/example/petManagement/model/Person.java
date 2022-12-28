package com.example.petManagement.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "Person")
public class Person implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable =false)
    private Integer id;
    private String emailid;
    private String username;
    private String password;

    public Person() {

    }

    public Person(Integer id, String emailid, String username, String password) {
        this.id = id;
        this.emailid = emailid;
        this.username = username;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

