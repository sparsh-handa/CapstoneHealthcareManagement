package com.example.HealthCareManagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCareManagement.model.Patient;

@Repository
public interface PatientRepository extends MongoRepository<Patient, String>{

}
