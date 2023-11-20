package com.example.HealthCareManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HealthCareManagement.model.Patient;
import com.example.HealthCareManagement.service.PatientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PatientController {
	
	@Autowired
	PatientService patientService;
	
	@PostMapping("/patient")
	public String saveAllPatients(@RequestBody List<Patient> patients) {
		return patientService.saveAllPatients(patients);
	}

	@GetMapping("/patient")
	public List<Patient> getAllPatients(){
		return patientService.getAllPatients();
	}
	
	@PutMapping("/patient/{patientId}")
    public String updatePatient(@PathVariable String patientId, @RequestBody Patient patientDetails) {
        return patientService.updatePatient(patientId, patientDetails);
    }

}
