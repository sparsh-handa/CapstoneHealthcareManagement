package com.example.HealthCareManagement.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCareManagement.model.Appointment;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String>{

}
