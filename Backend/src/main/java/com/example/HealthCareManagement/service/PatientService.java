package com.example.HealthCareManagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.HealthCareManagement.model.Patient;
import com.example.HealthCareManagement.repository.PatientRepository;

@Service
public class PatientService {
	
	@Autowired
	PatientRepository patientRepo;
	
	public String saveAllPatients(List<Patient> patients) {
		patientRepo.saveAll(patients);
		return "Added Successfully";
	}
	
	public List<Patient> getAllPatients() {
		return patientRepo.findAll();
	}
	
	public String updatePatient(String patientId, Patient patientDetails) {
        Optional<Patient> patientOptional = patientRepo.findById(patientId);
        if (!patientOptional.isPresent()) {
            return "Patient not found with id: " + patientId;
        }
        Patient patient = patientOptional.get();
        patient.setPatientName(patientDetails.getPatientName());
        patient.setAge(patientDetails.getAge());
        patient.setGender(patientDetails.getGender());
        patient.setDob(patientDetails.getDob());
        patient.setContact(patientDetails.getContact());
        patient.setBloodGroup(patientDetails.getBloodGroup());
        patient.setHistory(patientDetails.getHistory());
        patient.setEmail(patientDetails.getEmail());
        patient.setPassword(patientDetails.getPassword());
        patientRepo.save(patient);
        return "Patient details updated successfully";
    }


}
