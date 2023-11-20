// export interface MedicalHistory{
//     dotorName: String;
//     disease: String;
//     bloodGroup: String;
//     medication: String;
//     surgeries:number;
//     allergy:String;
//     vaccinations:number;
//     lifestyle:String;

// }

export interface MedicalHistory {
    medicalId: string;
    patientId: string;
    dotorName: string;
    disease: string;
    bloodGroup: string;
    medication: string;
    surgeries: number;
    allergy: string;
    vaccinations: number;
    lifestyle: string;
}