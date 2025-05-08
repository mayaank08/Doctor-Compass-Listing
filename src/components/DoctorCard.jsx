
import React from 'react';
import { Star, ThumbsUp, MapPin, CheckCircle } from 'lucide-react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="md:flex">
        {/* Doctor Image */}
        <div className="md:w-1/4 p-4 flex flex-col items-center justify-center">
          <div className="h-32 w-32 rounded-full overflow-hidden">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        {/* Doctor Info */}
        <div className="md:w-2/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
            <p className="text-medical-600">{doctor.specialty}</p>
          </div>
          
          <div className="mb-2">
            <p className="text-sm text-gray-600">{doctor.qualification}</p>
          </div>
          
          <div className="mb-3 flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-1 text-gray-400" />
            <span>{doctor.hospital}, {doctor.location}</span>
          </div>
          
          <div className="mb-3">
            <p className="text-sm"><span className="font-medium">{doctor.experience} Years</span> Experience Overall</p>
          </div>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-md mr-3">
              <Star size={16} className="mr-1 text-yellow-500 fill-current" />
              <span className="font-medium">{doctor.rating}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <ThumbsUp size={16} className="mr-1 text-medical-500" />
              <span>{doctor.reviewCount} Patient Reviews</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            <span className="text-medical-600 font-medium">Speaks: </span>
            {doctor.language.join(', ')}
          </div>
        </div>
        
        {/* Appointment Info */}
        <div className="md:w-1/4 p-4">
          <div className="mb-3">
            <p className="text-gray-700"><span className="font-medium">₹{doctor.consultationFee}</span> Consultation fee</p>
          </div>
          
          <div className="mb-4">
            {doctor.availability.today ? (
              <div className="flex items-center text-green-600">
                <CheckCircle size={16} className="mr-1" />
                <span className="font-medium">Available Today</span>
              </div>
            ) : (
              <div className="text-gray-600">
                <span>Next Available: {doctor.availability.nextAvailable}</span>
              </div>
            )}
          </div>
          
          <button className="w-full bg-medical-600 hover:bg-medical-700 text-white py-2 rounded-md mb-2">
            Book Appointment
          </button>
          
          <button className="w-full bg-white hover:bg-gray-50 text-medical-600 border border-medical-600 py-2 rounded-md">
            Consult Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
