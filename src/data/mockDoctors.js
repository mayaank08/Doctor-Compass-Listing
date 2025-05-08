
export const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "General Physician",
    experience: 15,
    qualification: "MBBS, MD (Internal Medicine)",
    hospital: "City Medical Center",
    location: "Delhi",
    consultationFee: 800,
    rating: 4.8,
    reviewCount: 342,
    gender: "Male",
    language: ["English", "Hindi"],
    availability: {
      today: true,
      slots: 5,
      nextAvailable: "Today"
    },
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dr. Kumar is a highly experienced general physician with expertise in treating common illnesses and chronic diseases."
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialty: "General Physician",
    experience: 12,
    qualification: "MBBS, DNB (Family Medicine)",
    hospital: "Wellness Hospital",
    location: "Mumbai",
    consultationFee: 700,
    rating: 4.7,
    reviewCount: 218,
    gender: "Female",
    language: ["English", "Hindi", "Marathi"],
    availability: {
      today: true,
      slots: 3,
      nextAvailable: "Today"
    },
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dr. Sharma specializes in family medicine and provides comprehensive healthcare for patients of all ages."
  },
  {
    id: 3,
    name: "Dr. Vikram Singh",
    specialty: "General Physician",
    experience: 20,
    qualification: "MBBS, MD (Internal Medicine), DM (Nephrology)",
    hospital: "Apollo Hospitals",
    location: "Bangalore",
    consultationFee: 1200,
    rating: 4.9,
    reviewCount: 512,
    gender: "Male",
    language: ["English", "Hindi", "Kannada"],
    availability: {
      today: false,
      slots: 0,
      nextAvailable: "Tomorrow"
    },
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dr. Singh is a senior consultant with two decades of experience in internal medicine and nephrology."
  },
  {
    id: 4,
    name: "Dr. Anjali Desai",
    specialty: "General Physician",
    experience: 8,
    qualification: "MBBS, DNB (General Medicine)",
    hospital: "LifeCare Hospital",
    location: "Hyderabad",
    consultationFee: 600,
    rating: 4.5,
    reviewCount: 175,
    gender: "Female",
    language: ["English", "Hindi", "Telugu"],
    availability: {
      today: true,
      slots: 7,
      nextAvailable: "Today"
    },
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dr. Desai is known for her patient-centric approach and effective treatment of common health issues."
  },
  {
    id: 5,
    name: "Dr. Arjun Menon",
    specialty: "General Physician",
    experience: 10,
    qualification: "MBBS, MD (Internal Medicine)",
    hospital: "Metro Healthcare",
    location: "Chennai",
    consultationFee: 900,
    rating: 4.6,
    reviewCount: 290,
    gender: "Male",
    language: ["English", "Tamil", "Malayalam"],
    availability: {
      today: false,
      slots: 0,
      nextAvailable: "Day After Tomorrow"
    },
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dr. Menon has extensive experience in treating lifestyle diseases and provides comprehensive healthcare solutions."
  },
  {
    id: 6,
    name: "Dr. Meera Patel",
    specialty: "General Physician",
    experience: 14,
    qualification: "MBBS, MD (General Medicine)",
    hospital: "City Care Hospital",
    location: "Ahmedabad",
    consultationFee: 750,
    rating: 4.7,
    reviewCount: 310,
    gender: "Female",
    language: ["English", "Hindi", "Gujarati"],
    availability: {
      today: true,
      slots: 2,
      nextAvailable: "Today"
    },
    image: "https://images.unsplash.com/photo-1651008376397-84c0ce218f41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dr. Patel is known for her holistic approach to healthcare and focuses on preventive medicine."
  },
  {
    id: 7,
    name: "Dr. Sanjay Verma",
    specialty: "General Physician",
    experience: 18,
    qualification: "MBBS, MD (Internal Medicine), Fellowship in Diabetology",
    hospital: "Diabetes Care Center",
    location: "Kolkata",
    consultationFee: 1000,
    rating: 4.8,
    reviewCount: 420,
    gender: "Male",
    language: ["English", "Hindi", "Bengali"],
    availability: {
      today: false,
      slots: 0,
      nextAvailable: "Tomorrow"
    },
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dr. Verma specializes in diabetes management and has helped thousands of patients manage their condition effectively."
  },
  {
    id: 8,
    name: "Dr. Kavita Reddy",
    specialty: "General Physician",
    experience: 11,
    qualification: "MBBS, DNB (Family Medicine)",
    hospital: "Family Health Clinic",
    location: "Pune",
    consultationFee: 650,
    rating: 4.6,
    reviewCount: 195,
    gender: "Female",
    language: ["English", "Hindi", "Marathi"],
    availability: {
      today: true,
      slots: 4,
      nextAvailable: "Today"
    },
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Dr. Reddy focuses on family medicine and provides comprehensive care for patients across all age groups."
  }
];

export const specialties = [
  { id: 1, name: "General Physician" },
  { id: 2, name: "Pediatrician" },
  { id: 3, name: "Dermatologist" },
  { id: 4, name: "Orthopedician" },
  { id: 5, name: "Cardiologist" },
  { id: 6, name: "Neurologist" },
  { id: 7, name: "Gynecologist" },
  { id: 8, name: "Psychiatrist" },
  { id: 9, name: "ENT Specialist" },
  { id: 10, name: "Ophthalmologist" }
];

export const cities = [
  { id: 1, name: "Delhi" },
  { id: 2, name: "Mumbai" },
  { id: 3, name: "Bangalore" },
  { id: 4, name: "Hyderabad" },
  { id: 5, name: "Chennai" },
  { id: 6, name: "Kolkata" },
  { id: 7, name: "Pune" },
  { id: 8, name: "Ahmedabad" },
  { id: 9, name: "Jaipur" },
  { id: 10, name: "Lucknow" }
];

export const hospitals = [
  { id: 1, name: "Apollo Hospitals" },
  { id: 2, name: "Fortis Healthcare" },
  { id: 3, name: "Max Healthcare" },
  { id: 4, name: "Medanta" },
  { id: 5, name: "AIIMS" },
  { id: 6, name: "Manipal Hospitals" },
  { id: 7, name: "Narayana Health" },
  { id: 8, name: "Columbia Asia" },
  { id: 9, name: "BLK Super Specialty Hospital" },
  { id: 10, name: "Wockhardt Hospitals" }
];
