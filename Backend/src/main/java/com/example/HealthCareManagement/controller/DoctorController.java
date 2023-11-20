package com.example.HealthCareManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HealthCareManagement.model.Doctor;
import com.example.HealthCareManagement.service.DoctorService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class DoctorController {
	
	@Autowired
	DoctorService doctorService;
	
	@PostMapping("/doctor")
	public String saveAllDoctors(@RequestBody List<Doctor> doctors) {
		return doctorService.saveAllDoctors(doctors);
	}

	@GetMapping("/doctor")
	public List<Doctor> getAllDoctors(){
		return doctorService.getAllDoctors();
	}
}
