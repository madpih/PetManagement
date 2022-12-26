package com.example.petManagement.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Pet implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Integer id;
    private String name;
    private String code;
    private String type;
    private String color;
    private String country;

    public Pet() {
    }

        public Pet(Integer id, String name, String code, String type, String color,String country) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.type = type;
        this.color = color;
        this.country = country;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry (String country) {
        this.country = country;
    }

    @Override
    public String toString() {
        return "Pet{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", idCode='" + code + '\'' +
                ", petType='" + type + '\'' +
                ", color='" + color + '\'' +
                ", country='" + country + '\'' +
                '}';
    }

}


