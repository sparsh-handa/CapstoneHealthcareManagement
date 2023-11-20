package com.example.HealthCareManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HealthCareManagement.model.Doctor;
import com.example.HealthCareManagement.repository.DoctorRepository;


@Service
public class DoctorService {
	
	@Autowired
	DoctorRepository doctorRepo;
	
	public String saveAllDoctors(List<Doctor> doctors) {
		doctorRepo.saveAll(doctors);
		return "Added Successfully";
	}
	
	public List<Doctor> getAllDoctors() {
		return doctorRepo.findAll();
	}

}

