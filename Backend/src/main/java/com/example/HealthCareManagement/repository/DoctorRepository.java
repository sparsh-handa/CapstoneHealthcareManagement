package com.example.HealthCareManagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCareManagement.model.Doctor;

@Repository
public interface DoctorRepository extends MongoRepository<Doctor, String>{

}
