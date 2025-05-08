
import { doctors } from '../data/mockDoctors';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Filter doctors based on the provided filters
const filterDoctors = (filters) => {
  return doctors.filter(doctor => {
    // Filter by specialty
    if (filters.specialty && doctor.specialty !== filters.specialty) {
      return false;
    }
    
    // Filter by gender
    if (filters.gender && doctor.gender !== filters.gender) {
      return false;
    }

    // Filter by location
    if (filters.location && doctor.location !== filters.location) {
      return false;
    }

    // Filter by availability
    if (filters.availability === 'today' && !doctor.availability.today) {
      return false;
    }

    // Filter by experience
    if (filters.experience) {
      const minExp = parseInt(filters.experience);
      if (doctor.experience < minExp) {
        return false;
      }
    }
    
    // Filter by consultation fee
    if (filters.maxFee && doctor.consultationFee > parseInt(filters.maxFee)) {
      return false;
    }

    // Filter by hospital
    if (filters.hospital && doctor.hospital !== filters.hospital) {
      return false;
    }

    // Filter by rating
    if (filters.rating && doctor.rating < parseInt(filters.rating)) {
      return false;
    }

    // Filter by search term (name, specialty, hospital)
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      return (
        doctor.name.toLowerCase().includes(term) ||
        doctor.specialty.toLowerCase().includes(term) ||
        doctor.hospital.toLowerCase().includes(term)
      );
    }

    return true;
  });
};

// Get paginated doctors with filters
export const getDoctors = async (page = 1, pageSize = 5, filters = {}) => {
  await delay(500); // Simulate network delay
  
  const filteredDoctors = filterDoctors(filters);
  
  // Calculate pagination
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedDoctors = filteredDoctors.slice(startIndex, endIndex);
  
  return {
    doctors: paginatedDoctors,
    totalCount: filteredDoctors.length,
    totalPages: Math.ceil(filteredDoctors.length / pageSize),
    currentPage: page
  };
};

// Add a new doctor (mock implementation)
export const addDoctor = async (doctorData) => {
  await delay(500); // Simulate network delay
  
  // Generate a new ID
  const newId = Math.max(...doctors.map(d => d.id)) + 1;
  
  const newDoctor = {
    id: newId,
    ...doctorData,
    rating: 0,
    reviewCount: 0
  };
  
  // In a real implementation, this would be saved to a database
  doctors.push(newDoctor);
  
  return { success: true, doctor: newDoctor };
};

// Get doctor by ID
export const getDoctorById = async (id) => {
  await delay(300); // Simulate network delay
  return doctors.find(doctor => doctor.id === parseInt(id)) || null;
};
